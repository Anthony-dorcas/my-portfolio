
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import "../styles/ContactForm.css";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_8t47phr",
        "template_psbs5nr",
        form.current,
        "v20rJ7ZP7Pjbxz6u3"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h4 className="small-title">Contact Me</h4>
          <h1 className="main-title">
            Let’s build your <br /> next digital project
          </h1>

          <div className="contact-details">
            <div>
              <h5>Chat to me</h5>
              <p>I’m available to discuss ideas and collaborations.</p>
              <a
                href="https://wa.me/2347045553668"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h5>Email me</h5>
              <p>Feel free to reach out anytime.</p>
              <a href="mailto:dorcasanthony196@gmail.com">
                dorcasanthony196@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* Right Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="first_name" placeholder="Name*" required />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name*"
              required
            />
          </div>
          <input type="text" name="company" placeholder="Company Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input type="tel" name="phone" placeholder="Phone Number*" required />
          <textarea
            name="message"
            placeholder="Message*"
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
