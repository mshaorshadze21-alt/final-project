import "./ServiceCards.css"

import walking from "../../assets/petcare-red-illustrations/dog-walking.png"
import sitting from "../../assets/petcare-red-illustrations/pet-sitting.png"
import grooming from "../../assets/petcare-red-illustrations/pet-grooming.png"
import vet from "../../assets/petcare-red-illustrations/veterinary-care.png"

const ServiceCard = () => {

    const services = [
  {
    image: walking,
    title: "Dog Walking",
    description: "Daily walks and happy adventures.",
  },
  {
    image: sitting,
    title: "Pet Sitting",
    description: "Care and attention while you're away.",
  },
  {
    image: grooming,
    title: "Grooming",
    description: "Keep your pet clean and comfortable.",
  },
  {
    image: vet,
    title: "Veterinary Care",
    description: "Find care for your pet's health.",
  },
];

  return (
    <div className="service-grid">
        {services.map((service) => (
              <article className="service-caard" key={service.title}>
                <div className="home-service-image">
                  <img src={service.image} alt="service-image" />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/services" className="service-liink">
                  Discover more <span aria-hidden="true"></span>
                </a>
              </article>
            ))}
    </div>
  )
}

export default ServiceCard