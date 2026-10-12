import "./HowItWorks.css"

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-heading">
        <span className="section-label">HOW IT WORKS</span>
        <h2>How PetCare Works</h2>
        <p>
          Finding the right care for your pet
          takes just a few simple steps.
        </p>
      </div>

      <div className="how-it-works__steps">
        <article className="step-card">
          <span className="step-card__number">01</span>
          <h3>Search</h3>
          <p>
            Find the service your pet needs.
          </p>
        </article>

        <article className="step-card">
          <span className="step-card__number">02</span>
          <h3>Choose</h3>
          <p>
            Compare available options and their details.
          </p>
        </article>

        <article className="step-card">
          <span className="step-card__number">03</span>
          <h3>Book</h3>
          <p>
            Choose a convenient service and time.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HowItWorks