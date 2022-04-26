import Footer from "../Footer"

// Anyone creating the form can use Formsubmit > https://formsubmit.co/

const ContactPage = () => {
  return (
    <section>
      <div>
        <h2>Contact Us</h2>
      </div>
      <div>
        <div className="contact-form">
          <form>
            <h2>Send Us a message</h2>
            <span>We love to hear from you</span>
          </form>
        </div>
        <div className="contact-info"></div>
      </div>
      <Footer />
    </section>
  )
}

export default ContactPage
