import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const messages = req.body?.messages;

    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > 20
    ) {
      return res.status(400).json({
        error: "Invalid messages",
      });
    }

    // ვიღებთ მხოლოდ დაშვებულ როლებსა და ტექსტს
    const safeMessages = messages
      .filter(
        (m) =>
          ["user", "assistant"].includes(m.role) &&
          typeof m.content === "string"
      )
      .map((m) => ({
        role: m.role,
        content: m.content.slice(0, 4000),
      }));

    if (
      safeMessages.length === 0 ||
      safeMessages[safeMessages.length - 1].role !== "user"
    ) {
      return res.status(400).json({
        error: "A user message is required",
      });
    }

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: `
        შენ ხარ მეგობრული AI ასისტენტი ვებგვერდზე.
        მომხმარებელს უპასუხე ქართულად, თუ სხვა ენას არ ითხოვს.
        პასუხები იყოს გასაგები, ზუსტი და სასარგებლო.
        თუ პასუხი არ იცი, ნუ მოიგონებ ინფორმაციას.
        თუ მომხმარებელი ვებგვერდის შესახებ გეკითხება,
        არ მოიგონო ისეთი ფუნქციები ან ინფორმაცია,
        რომელიც მოცემული არ გაქვს.
      `,
      input: safeMessages,
    });

    return res.status(200).json({
      reply:
        response.output_text ||
        "ბოდიში, პასუხის მიღება ვერ მოხერხდა.",
    });
  } catch (error) {
    console.error("AI request failed:", error.message);

    return res.status(500).json({
      error: "პასუხის მიღება ვერ მოხერხდა. სცადე თავიდან.",
    });
  }
}