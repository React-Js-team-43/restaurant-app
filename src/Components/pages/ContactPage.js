// Anyone creating the form can use Formsubmit > https://formsubmit.co/

import PageTitle from "../PageTitle";

const ContactPage = () => {
  return (
    <section>
      <PageTitle title={"Contact Us"} />
      <div>
        <div className="contact-form">
          <form style={{ textAlign: "center" }}>
            <h4>Send Us a message</h4>
            <span>We love to hear from you</span>
            <div style={{ padding: "2em", maxWidth: "480px", margin: "auto" }}>
              <label style={{ textAlign: "left", display: "block" }}>
                Your Name:
              </label>
              <input
                style={{
                  display: "block",
                  width: "100%",
                  height: "25px",
                  padding: "5px",
                }}
                type="text"
              />
              <label
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "20px",
                }}
              >
                Email:
              </label>
              <input
                style={{
                  display: "block",
                  width: "100%",
                  height: "25px",
                  padding: "5px",
                }}
                type="text"
              />
              <label
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "20px",
                }}
              >
                Your Message:
              </label>
              <textarea
                style={{ display: "block", width: "100%", padding: "5px 10px" }}
                type="textarea"
              />

              <input
                style={{ marginTop: "20px", padding: "5px" }}
                type="submit"
              />
            </div>
          </form>
        </div>
        <div className="contact-info"></div>
      </div>
    </section>
  );
};

export default ContactPage;
