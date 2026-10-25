import "./businesses.css";
import vetClinic from "../../assets/partners/vet-clinic.jpg"
import grooming from "../../assets/partners/grooming.jpg"
import petShop from "../../assets/partners/pet-shop.jpg"
import petHotel from "../../assets/partners/pet-hotel.jpg"
import heroDog from "../../assets/partners/hero-doog.png"

const partners = [
  {
    id: 1,
    name: "Pet Health Clinic",
    category: "Veterinary Care",
    description:
      "Providing professional veterinary care, regular checkups, vaccinations, and medical support to keep your pets healthy and happy.",
    image: vetClinic,
  },
  {
    id: 2,
    name: "Happy Paws Studio",
    category: "Pet Grooming",
    description:
      "A friendly grooming studio offering bathing, haircuts, nail trimming, and gentle care to keep your pets looking and feeling their best.",
    image: grooming,
  },
  {
    id: 3,
    name: "Paw & Co.",
    category: "Pet Shop",
    description:
      "A welcoming pet store offering quality food, toys, accessories, and everyday essentials for your furry companions.",
    image: petShop,
  },
  {
    id: 4,
    name: "Cozy Tails Hotel",
    category: "Pet Hotel",
    description:
      "A safe and comfortable home away from home, where pets receive personal attention, care, and plenty of love while their owners are away.",
    image: petHotel,
  },
];

function Businesses() {
  return (
    <main className="businesses-page">
      <section className="businesses-hero">
        <div className="businesses-container businesses-hero-layout">
          <div className="businesses-hero-content">
            <span className="businesses-label">
              PETCARE PARTNERS
            </span>

            <h1>
              Good care starts
              <br />
              with great partners.
            </h1>

            <p>
              Meet the businesses that share our love for
              animals and help us make pet care easier,
              safer, and more accessible.
            </p>
          </div>

          <div className="businesses-hero-visual">
            <div className="businesses-hero-circle"></div>

            <img
              src={heroDog}
              alt="Happy dog"
              className="businesses-hero-dog"
            />
          </div>
        </div>
      </section>

     
      <section className="businesses-partners">
        <div className="businesses-container">
          <div className="businesses-section-heading">
            <span className="businesses-label">
              OUR COMMUNITY
            </span>

            <h2>Meet our partners.</h2>

            <p>
              Discover the businesses that help us provide
              better care for every pet.
            </p>
          </div>

          <div className="businesses-partners-list">
            {partners.map((partner, index) => (
              <article
                className={`businesses-partner ${
                  index % 2 !== 0
                    ? "businesses-partner-reverse"
                    : ""
                }`}
                key={partner.id}
              >
                <div className="businesses-partner-image">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                  />
                </div>

                <div className="businesses-partner-content">
                  <span className="businesses-label">
                    {partner.category}
                  </span>

                  <h3>{partner.name}</h3>

                  <p>{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="businesses-join">
        <div className="businesses-container businesses-join-layout">
          <div>
            <span className="businesses-label">
              GROW WITH PETCARE
            </span>

            <h2>Let's make pet care better together.</h2>
          </div>

          <p>
            We believe great partnerships create better
            experiences for pets and their owners.
            Together, we can build a stronger pet-loving
            community.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Businesses;