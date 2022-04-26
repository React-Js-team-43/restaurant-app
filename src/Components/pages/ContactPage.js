// Anyone creating the form can use Formsubmit > https://formsubmit.co/

import PageTitle from "../PageTitle";

const ContactPage = () => {
  return (
    <section>
      <PageTitle title={"Contact Us"} />
      <div>
        <div className="contact-form">
          <form>
            <h4>Send Us a message</h4>
            <span>We love to hear from you</span>
          </form>
        </div>
        <div className="contact-info"></div>
      </div>
    </section>
  );
};

export default ContactPage;
