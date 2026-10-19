
import { useMemo, useState } from "react";
import "./services.css";

const servicesData = [
  { id: 1, name: "Dog Walking", category: "Walking", icon: <i class="fa-solid fa-dog"></i>, description: "Daily walks, fresh air and happy adventures for your dog.", price: 20, unit: "walk" },
  { id: 2, name: "Pet Sitting", category: "Home Care", icon: <i class="fa-solid fa-house"></i>, description: "Loving care and attention while you are away.", price: 35, unit: "visit" },
  { id: 3, name: "Pet Grooming", category: "Grooming", icon: <i class="fa-solid fa-scissors"></i>, description: "Bathing, brushing and grooming for your pet.", price: 45, unit: "session" },
  { id: 4, name: "Veterinary Care", category: "Health", icon: <i class="fa-solid fa-stethoscope"></i>, description: "Routine checkups and professional health consultations.", price: 60, unit: "appointment" },
  { id: 5, name: "Pet Boarding", category: "Home Care", icon: <i class="fa-regular fa-moon"></i>, description: "A safe and comfortable place for overnight stays.", price: 50, unit: "night" },
  { id: 6, name: "Dog Training", category: "Training", icon: <i class="fa-solid fa-basketball"></i>, description: "Training sessions to build good habits and confidence.", price: 40, unit: "session" },
  { id: 7, name: "Pet Daycare", category: "Home Care", icon: <i class="fa-solid fa-paw"></i>, description: "Supervised play and companionship throughout the day.", price: 30, unit: "day" },
  { id: 8, name: "Pet Dental Care", category: "Health", icon: <i class="fa-solid fa-tooth"></i>, description: "Dental hygiene services for your pet's oral health.", price: 35, unit: "session" },
  { id: 9, name: "Pet Taxi", category: "Transport", icon: <i class="fa-solid fa-taxi"></i>, description: "Convenient transport to appointments and other destinations.", price: 25, unit: "trip" },
  { id: 10, name: "Pet Nutrition", category: "Health", icon: <i class="fa-solid fa-carrot"></i>, description: "Nutrition guidance to help your pet stay healthy.", price: 30, unit: "consultation" },
  { id: 11, name: "Puppy Care", category: "Home Care", icon: <i class="fa-solid fa-paw"></i>, description: "Gentle care and attention for your growing puppy.", price: 30, unit: "visit" },
  { id: 12, name: "Pet Photography", category: "Other", icon: <i class="fa-solid fa-camera"></i>, description: "Capture special moments with your furry friend.", price: 55, unit: "session" },
];

const categories = [
  "All services",
  "Walking",
  "Home Care",
  "Grooming",
  "Health",
  "Training",
  "Transport",
  "Other",
];

export default function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All services");
  const [maxPrice, setMaxPrice] = useState("all");
  const [sort, setSort] = useState("default");
  const [selectedService, setSelectedService] = useState(null);
  const [success, setSuccess] = useState(false);

  const [booking, setBooking] = useState({
    owner: "",
    petName: "",
    petType: "Dog",
    date: "",
    time: "",
    notes: "",
  });

  const filteredServices = useMemo(() => {
    let result = servicesData.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All services" || service.category === category;

      const matchesPrice =
        maxPrice === "all" || service.price <= Number(maxPrice);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, maxPrice, sort]);

  function openBooking(service) {
    setSelectedService(service);
    setSuccess(false);
    setBooking({
      owner: "",
      petName: "",
      petType: "Dog",
      date: "",
      time: "",
      notes: "",
    });
  }

  function closeBooking() {
    setSelectedService(null);
    setSuccess(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
  }

  function resetFilters() {
    setSearch("");
    setCategory("All services");
    setMaxPrice("all");
    setSort("default");
  }

  return (
    <main className="services-page">
      <section className="services-hero">
        <span className="services-eyebrow">CARE FOR EVERY PAW</span>
        <h1>
          Find the perfect care
          <br />
          <span>for your best friend.</span>
        </h1>
        <p>
          From everyday walks to professional care, discover all the
          services your pet needs in one place.
        </p>

        <div className="services-search">
          <span className="search-icon" aria-hidden="true"><i class="fa-solid fa-magnifying-glass"></i></span>
          <input
            type="search"
            placeholder="Search for a service..."
            aria-label="Search services"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>
      </section>

      <section className="services-catalog">
        <div className="services-heading">
          <div>
            <span className="services-eyebrow">OUR SERVICES</span>
            <h2>Everything your pet needs</h2>
            <p>Find the right service for every stage of their life.</p>
          </div>
          <span className="services-count">
            {filteredServices.length} services
          </span>
        </div>

        <div className="services-filters">
          <div className="filter-field category-filter">
            <label htmlFor="service-category">Category</label>
            <select
              id="service-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="service-price">Maximum price</label>
            <select
              id="service-price"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
            >
              <option value="all">Any price</option>
              <option value="25">Up to $25</option>
              <option value="35">Up to $35</option>
              <option value="50">Up to $50</option>
              <option value="60">Up to $60</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="service-sort">Sort by</label>
            <select
              id="service-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="default">Recommended</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <button
            type="button"
            className="reset-filters"
            onClick={resetFilters}
          >
            Reset filters
          </button>
        </div>

        {filteredServices.length > 0 ? (
          <div className="services-grid">
            {filteredServices.map((service) => (
              <article className="service-card" key={service.id}>
                <div className="service-card-top">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-category">{service.category}</span>
                </div>

                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-card-bottom">
                  <div className="service-price">
                    <strong>${service.price}</strong>
                    <span>/ {service.unit}</span>
                  </div>
                  <button
                    type="button"
                    className="book-service-btn"
                    onClick={() => openBooking(service)}
                  >
                    Book now
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="services-empty">
            <span><i class="fa-solid fa-paw"></i></span>
            <h3>No services found</h3>
            <p>Try another search or change your filters.</p>
            <button
              type="button"
              className="book-service-btn"
              onClick={resetFilters}
            >
              Show all services
            </button>
          </div>
        )}
      </section>

      {selectedService && (
        <div
          className="booking-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeBooking();
          }}
        >
          <section
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
          >
            <button
              type="button"
              className="booking-close"
              onClick={closeBooking}
              aria-label="Close booking window"
            >
              ×
            </button>

            {success ? (
              <div className="booking-success">
                <div className="success-icon">✓</div>
                <span className="services-eyebrow">REQUEST COMPLETED</span>
                <h2 id="booking-title">Thank you, {booking.owner}!</h2>
                <p>
                  Your booking request for {selectedService.name} has
                  been prepared.
                </p>

                <div className="booking-summary">
                  <p><strong>Pet:</strong> {booking.petName} ({booking.petType})</p>
                  <p><strong>Date:</strong> {booking.date}</p>
                  <p><strong>Time:</strong> {booking.time}</p>
                  <p><strong>Price:</strong> ${selectedService.price}</p>
                </div>

                <p className="booking-notice">
                  Demo only: this request has not been saved or sent to a provider.
                </p>
                <button
                  type="button"
                  className="booking-submit"
                  onClick={closeBooking}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <span className="services-eyebrow">LET'S MAKE A BOOKING</span>
                <h2 id="booking-title">Book {selectedService.name}</h2>
                <p className="booking-intro">
                  Tell us about your pet and choose a suitable time.
                </p>

                <div className="booking-selected-service">
                  <span className="service-icon">{selectedService.icon}</span>
                  <div>
                    <strong>{selectedService.name}</strong>
                    <span>${selectedService.price} / {selectedService.unit}</span>
                  </div>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="booking-field">
                    <label htmlFor="booking-owner">Your name</label>
                    <input
                      id="booking-owner"
                      value={booking.owner}
                      onChange={(event) => setBooking({
                        ...booking, owner: event.target.value,
                      })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="booking-form-row">
                    <div className="booking-field">
                      <label htmlFor="booking-pet">Pet's name</label>
                      <input
                        id="booking-pet"
                        value={booking.petName}
                        onChange={(event) => setBooking({
                          ...booking, petName: event.target.value,
                        })}
                        placeholder="Pet's name"
                        required
                      />
                    </div>

                    <div className="booking-field">
                      <label htmlFor="booking-pet-type">Pet type</label>
                      <select
                        id="booking-pet-type"
                        value={booking.petType}
                        onChange={(event) => setBooking({
                          ...booking, petType: event.target.value,
                        })}
                      >
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Bird</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="booking-form-row">
                    <div className="booking-field">
                      <label htmlFor="booking-date">Preferred date</label>
                      <input
                        id="booking-date"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        value={booking.date}
                        onChange={(event) => setBooking({
                          ...booking, date: event.target.value,
                        })}
                        required
                      />
                    </div>

                    <div className="booking-field">
                      <label htmlFor="booking-time">Preferred time</label>
                      <input
                        id="booking-time"
                        type="time"
                        value={booking.time}
                        onChange={(event) => setBooking({
                          ...booking, time: event.target.value,
                        })}
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-field">
                    <label htmlFor="booking-notes">Additional details (optional)</label>
                    <textarea
                      id="booking-notes"
                      rows="3"
                      value={booking.notes}
                      onChange={(event) => setBooking({
                        ...booking, notes: event.target.value,
                      })}
                      placeholder="Anything we should know about your pet?"
                    />
                  </div>

                  <button type="submit" className="booking-submit">
                    Confirm booking request · ${selectedService.price}
                  </button>
                  <p className="booking-notice">
                    Demo only: no payment is processed and no provider is contacted.
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
