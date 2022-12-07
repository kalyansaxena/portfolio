import React from "react";
import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jx22yk3",
        "template_4sg8ec7",
        form.current,
        "lXZ_ckY--KgukGsr-"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <h1 className="c-me">Contact Me</h1>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-title">
            <h2>Let's start working together!!</h2>
          </div>
          <div className="c-mail">
            <MailOutlineOutlinedIcon className="icon" />
            <h4>Mail</h4>
            <span className="c-mail-data">kalyansaxena123@gmail.com</span>
          </div>
          <div className="c-whatsapp">
            <WhatsappOutlinedIcon className="icon" />
            <h4>WhatsApp</h4>
            <span>+91 9701169690</span>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <b>What's your story?</b> Get in touch, Available for freelancing if
            the right project comes along!
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input
              type="hidden"
              name="to_name"
              value="Kalyan Saxena Mutyala"
              className="hiddenInput"
              placeholder="Kalyan Saxena Mutyala"
              hidden
              required
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="3"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
