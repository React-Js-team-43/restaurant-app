// Anyone creating the form can use Formsubmit > https://formsubmit.co/

import PageTitle from "../PageTitle"

const ContactPage = () => {
  return (
    <section>
      <PageTitle title={"Contact Us"} />
      <div>
        <div className="contact-form">
          <form
            style={{ textAlign: "center" }}
            action="https://formsubmit.co/samuelajala01@email.com"
            method="POST"
          >
            <h4>Send Us a message</h4>
            <span>We love to hear from you</span>

            <label for="name">
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </label>
            <label for="email">
              Email:
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
              />
            </label>
            <label for="message">
              Message/Comment
              <textarea
                name="message"
                required
                placeholder="Question/Comment"
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info"></div>
      </div>
    </section>
  )
}

export default ContactPage
