import "./ServiceCards.css"

const ServiceCard = () => {

    const services = [
  {
    icon: <i class="fa-solid fa-paw"></i>,
    title: "Dog Walking",
    description: "Daily walks and happy adventures.",
  },
  {
    icon: <i class="fa-solid fa-house"></i>,
    title: "Pet Sitting",
    description: "Care and attention while you're away.",
  },
  {
    icon: <i class="fa-solid fa-scissors"></i>,
    title: "Grooming",
    description: "Keep your pet clean and comfortable.",
  },
  {
    icon: <i class="fa-solid fa-stethoscope"></i>,
    title: "Veterinary Care",
    description: "Find care for your pet's health.",
  },
];

  return (
    <div className="service-grid">
        {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/services" className="service-link">
                  Discover more <span aria-hidden="true"></span>
                </a>
              </article>
            ))}
    </div>
  )
}

export default ServiceCard