
import { useMemo, useState } from "react";
import "./caregivers.css";

const caregiversData = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "Dog Walker",
    category: "Walking",
    icon: "🐕",
    rating: 4.9,
    price: 20,
    location: "City Center",
    experience: "4 years",
    description: "Friendly dog walker who loves outdoor adventures.",
  },
  {
    id: 2,
    name: "Olivia Brown",
    role: "Pet Sitter",
    category: "Sitting",
    icon: "🏡",
    rating: 5.0,
    price: 30,
    location: "Old Town",
    experience: "5 years",
    description: "Caring sitter who keeps pets comfortable and happy.",
  },
  {
    id: 3,
    name: "Noah Davis",
    role: "Dog Walker",
    category: "Walking",
    icon: "🦮",
    rating: 4.8,
    price: 18,
    location: "Seaside",
    experience: "3 years",
    description: "Active walker who makes every walk an adventure.",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Pet Sitter",
    category: "Sitting",
    icon: "🐈",
    rating: 4.9,
    price: 25,
    location: "City Center",
    experience: "6 years",
    description: "Experienced caregiver for cats and dogs.",
  },
  {
    id: 5,
    name: "Liam Anderson",
    role: "Pet Trainer",
    category: "Training",
    icon: "🎾",
    rating: 4.8,
    price: 40,
    location: "Green District",
    experience: "5 years",
    description: "Patient trainer using positive reinforcement.",
  },
  {
    id: 6,
    name: "Ava Thompson",
    role: "Pet Sitter",
    category: "Sitting",
    icon: "🐾",
    rating: 5.0,
    price: 28,
    location: "Seaside",
    experience: "4 years",
    description: "Gentle caregiver who gives every pet special attention.",
  },
];

const emptyBooking = {
  owner: "",
  petName: "",
  petType: "Dog",
  date: "",
  time: "",
  duration: "1",
  notes: "",
};

export default function Caregivers() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("all");
  const [minRating, setMinRating] = useState("all");
  const [sort, setSort] = useState("recommended");

  const [selected, setSelected] = useState(null);
  const [booking, setBooking] = useState(emptyBooking);
  const [success, setSuccess] = useState(false);

  const caregivers = useMemo(() => {
    let result = caregiversData.filter((person) => {
      const text = [
        person.name,
        person.role,
        person.location,
        person.description,
      ]
        .join(" ")
        .toLowerCase();

      return (
        text.includes(search.toLowerCase()) &&
        (category === "All" || person.category === category) &&
        (maxPrice === "all" || person.price <= Number(maxPrice)) &&
        (minRating === "all" || person.rating >= Number(minRating))
      );
    });

    if (sort === "price") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, maxPrice, minRating, sort]);

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setMaxPrice("all");
    setMinRating("all");
    setSort("recommended");
  }

  function openBooking(person) {
    setSelected(person);
    setBooking({ ...emptyBooking });
    setSuccess(false);
  }

  function closeBooking() {
    setSelected(null);
    setSuccess(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
  }

  return (
    <main className="caregivers-page">
      <section className="caregivers-hero">
        <span className="caregivers-eyebrow">
          YOUR PET DESERVES THE BEST
        </span>

        <h1>
          Caring hands,
          <br />
          <span>happy paws.</span>
        </h1>

        <p>
          Meet loving pet sitters, friendly dog walkers and
          experienced professionals for your best friend.
        </p>

        <div className="caregivers-search">
          <span><i class="fa-solid fa-magnifying-glass"></i></span>
          <input
            type="search"
            placeholder="Search by name, service or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search caregivers"
          />
          {search && (
            <button type="button" onClick={() => setSearch("")}>
              ×
            </button>
          )}
        </div>

        <div className="caregivers-hero-stats">
          <div>
            <strong>{caregiversData.length}</strong>
            <span>Caregivers</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>Sample rating</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Pet lovers</span>
          </div>
        </div>
      </section>

      <section className="caregivers-catalog">
        <div className="caregivers-heading">
          <div>
            <span className="caregivers-eyebrow">MEET OUR COMMUNITY</span>
            <h2>Find your pet's caregiver</h2>
            <p>Choose the right person for your pet's needs.</p>
          </div>

          <span className="caregivers-count">
            {caregivers.length} profiles
          </span>
        </div>

        <div className="caregivers-filters">
          <div className="caregiver-filter-field">
            <label htmlFor="cg-category">Service type</label>
            <select
              id="cg-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All services</option>
              <option value="Walking">Dog walking</option>
              <option value="Sitting">Pet sitting</option>
              <option value="Training">Pet training</option>
            </select>
          </div>

          <div className="caregiver-filter-field">
            <label htmlFor="cg-price">Maximum price</label>
            <select
              id="cg-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            >
              <option value="all">Any price</option>
              <option value="20">Up to $20</option>
              <option value="25">Up to $25</option>
              <option value="30">Up to $30</option>
              <option value="40">Up to $40</option>
            </select>
          </div>

          <div className="caregiver-filter-field">
            <label htmlFor="cg-rating">Minimum rating</label>
            <select
              id="cg-rating"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
            >
              <option value="all">Any rating</option>
              <option value="4.7">4.7+</option>
              <option value="4.8">4.8+</option>
              <option value="4.9">4.9+</option>
              <option value="5">5.0</option>
            </select>
          </div>

          <div className="caregiver-filter-field">
            <label htmlFor="cg-sort">Sort by</label>
            <select
              id="cg-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="price">Lowest price</option>
              <option value="rating">Highest rating</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          <button
            type="button"
            className="caregiver-reset-btn"
            onClick={resetFilters}
          >
            Reset filters
          </button>
        </div>

        {caregivers.length > 0 ? (
          <div className="caregivers-grid">
            {caregivers.map((person) => (
              <article className="caregiver-card" key={person.id}>
                <div className="caregiver-card-cover">
                  <div className="caregiver-avatar">{person.icon}</div>
                  <span className="caregiver-verified">
                    ✓ Caregiver
                  </span>
                </div>

                <div className="caregiver-card-content">
                  <div className="caregiver-name-row">
                    <div>
                      <h3>{person.name}</h3>
                      <p className="caregiver-role">{person.role}</p>
                    </div>

                    <div className="caregiver-rating">
                      <span>★</span> {person.rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="caregiver-location">
                    <span>⌖</span>
                    {person.location}
                    <span>•</span>
                    {person.experience}
                  </div>

                  <p className="caregiver-description">
                    {person.description}
                  </p>

                  <div className="caregiver-specialties">
                    <span>{person.category}</span>
                    <span>Pet care</span>
                  </div>

                  <div className="caregiver-reviews">
                    ★★★★★ <span>Trusted pet care</span>
                  </div>

                  <div className="caregiver-card-footer">
                    <div className="caregiver-price">
                      <strong>${person.price}</strong>
                      <span>
                        / {person.category === "Walking"
                          ? "walk"
                          : person.category === "Training"
                            ? "session"
                            : "visit"}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="caregiver-book-btn"
                      onClick={() => openBooking(person)}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="caregivers-empty">
            <span>🐾</span>
            <h3>No caregivers found</h3>
            <p>Try another search or change the filters.</p>
            <button
              type="button"
              className="caregiver-book-btn"
              onClick={resetFilters}
            >
              Show all caregivers
            </button>
          </div>
        )}
      </section>

      {selected && (
        <div
          className="caregiver-booking-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeBooking();
          }}
        >
          <section
            className="caregiver-booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cg-booking-title"
          >
            <button
              type="button"
              className="caregiver-modal-close"
              onClick={closeBooking}
              aria-label="Close booking"
            >
              ×
            </button>

            {success ? (
              <div className="caregiver-booking-success">
                <div className="caregiver-success-icon">✓</div>

                <span className="caregivers-eyebrow">
                  BOOKING REQUEST
                </span>

                <h2>Thank you, {booking.owner}!</h2>

                <p>
                  Your booking request for {selected.name} is ready.
                </p>

                <div className="caregiver-booking-summary">
                  <p>
                    <strong>Caregiver:</strong> {selected.name}
                  </p>
                  <p>
                    <strong>Pet:</strong> {booking.petName}
                  </p>
                  <p>
                    <strong>Pet type:</strong> {booking.petType}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {booking.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {booking.duration} hour(s)
                  </p>
                  <p>
                    <strong>Estimated total:</strong> $
                    {selected.price * Number(booking.duration)}
                  </p>
                </div>

                <p className="caregiver-booking-notice">
                  Demo only. The request has not been saved to a database.
                </p>

                <button
                  type="button"
                  className="caregiver-submit-btn"
                  onClick={closeBooking}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <span className="caregivers-eyebrow">
                  PETCARE BOOKING
                </span>

                <h2 id="cg-booking-title">
                  Book {selected.name}
                </h2>

                <p className="caregiver-modal-intro">
                  Fill in the details to request your preferred time.
                </p>

                <div className="caregiver-selected-profile">
                  <div className="caregiver-avatar">
                    {selected.icon}
                  </div>

                  <div>
                    <strong>{selected.name}</strong>
                    <span>{selected.role}</span>
                    <span>
                      ★ {selected.rating} · ${selected.price} per service
                    </span>
                  </div>
                </div>

                <form
                  className="caregiver-booking-form"
                  onSubmit={handleSubmit}
                >
                  <div className="caregiver-booking-field">
                    <label htmlFor="cg-owner">Your name</label>
                    <input
                      id="cg-owner"
                      value={booking.owner}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          owner: e.target.value,
                        })
                      }
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="caregiver-booking-row">
                    <div className="caregiver-booking-field">
                      <label htmlFor="cg-pet">Pet's name</label>
                      <input
                        id="cg-pet"
                        value={booking.petName}
                        onChange={(e) =>
                          setBooking({
                            ...booking,
                            petName: e.target.value,
                          })
                        }
                        placeholder="Pet's name"
                        required
                      />
                    </div>

                    <div className="caregiver-booking-field">
                      <label htmlFor="cg-pet-type">Pet type</label>
                      <select
                        id="cg-pet-type"
                        value={booking.petType}
                        onChange={(e) =>
                          setBooking({
                            ...booking,
                            petType: e.target.value,
                          })
                        }
                      >
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Bird</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="caregiver-booking-row">
                    <div className="caregiver-booking-field">
                      <label htmlFor="cg-date">Preferred date</label>
                      <input
                        id="cg-date"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        value={booking.date}
                        onChange={(e) =>
                          setBooking({
                            ...booking,
                            date: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="caregiver-booking-field">
                      <label htmlFor="cg-time">Preferred time</label>
                      <input
                        id="cg-time"
                        type="time"
                        value={booking.time}
                        onChange={(e) =>
                          setBooking({
                            ...booking,
                            time: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="caregiver-booking-field">
                    <label htmlFor="cg-duration">Duration</label>
                    <select
                      id="cg-duration"
                      value={booking.duration}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          duration: e.target.value,
                        })
                      }
                    >
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                    </select>
                  </div>

                  <div className="caregiver-booking-field">
                    <label htmlFor="cg-notes">
                      Additional details
                    </label>
                    <textarea
                      id="cg-notes"
                      rows="3"
                      value={booking.notes}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          notes: e.target.value,
                        })
                      }
                      placeholder="Tell us about your pet..."
                    />
                  </div>

                  <div className="caregiver-estimated-price">
                    <span>Estimated total</span>
                    <strong>
                      ${selected.price * Number(booking.duration)}
                    </strong>
                  </div>

                  <button
                    type="submit"
                    className="caregiver-submit-btn"
                  >
                    Request booking
                  </button>

                  <p className="caregiver-booking-notice">
                    Demo form — no payment or external booking is processed.
                  </p>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
