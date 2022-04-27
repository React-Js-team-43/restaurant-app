import PageTitle from "../PageTitle"

const ContactPage = () => {
  return (
    <section id="contact-page">
      <PageTitle title={"Contact Us"} />
      <div class="contact-container">
        <div className="contact-form">
          <form
            style={{ textAlign: "center" }}
            action="https://formsubmit.co/d7fcbe04758434a6608acbab04f926d1.com"
            method="POST"
          >
            <h4>Send us a message</h4>
            <p>We love to hear from you</p>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
            />
            <label>Message/Comment:</label>
            <textarea
              name="message"
              required
              placeholder="Let's hear from you"
              rows="5"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <div>
            <h4>Address</h4>
            <p>Las Colinas Plaza</p>
            <p>4020 N MacArthur Blvd #100</p>
            <p>Irving, Texas 75038</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
