import "./HomeServices.css"
import ServiceCard from "../Cards/ServiceCards"

const HomeServices = () => {
  return (
    <section className="service-section">
        <div className="service-section-heading">
            <span className="eyebrow">HERE FOR YOUR PET</span>
            <h2>Everything they need, all in one place.</h2>
            <p>
              From daily walks to professional care,
              find the right service for your best friend.
            </p>
        </div>

        <ServiceCard/>
    </section>
  )
}

export default HomeServices