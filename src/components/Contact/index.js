import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);

  return (
    <footer id="contact" className="main-container">
      <div className="contact">
        <div className="contact-left">
          <h3 className="pre-title">{contact.pretitle}</h3>
          <form
            className="contact-form"
            action="https://formspree.io/f/xzbllrrq"
            method="POST"
          >
            <input type="text" placeholder="Your Name" name="name" required />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              cols="30"
              rows="10"
              required
            />
            <button className="btn-submit" type="submit">
              {contact.submit}
            </button>
          </form>
        </div>

        <div className="contact-right">
          <h3 className="pre-title">{contact.pretitle2}</h3>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-4h2v4h-2zm0-6.5V7h2v3h-2z" />
              </svg>
            </div>
            <div className="contact-item-detail">
              <h4>{contact.item1}</h4>
              <p>{contact.item2}</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17v-6h2v6h-2zm0-8V7h2v3h-2z" />
              </svg>
            </div>
            <div className="contact-item-detail"> 
              <h4>{contact.item3}</h4>
              <p>
                <a href="tel:+123456789">{contact.number}</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17v-6h2v6h-2zm0-8V7h2v3h-2z" />
              </svg>
            </div>
            <div className="contact-item-detail">
              <h4>{contact.item4}</h4>
              <p>
                <a href="https://mail.google.com/mail/u/0/?hl=en#inbox">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Additional Social Media Links */}
          <div className="contact-item">
            <div className="contact-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46a1.77 1.77 0 0 0 1.77-1.77V1.77A1.77 1.77 0 0 0 22.23 0zM12 17.56c-3.06 0-5.56-2.5-5.56-5.56s2.5-5.56 5.56-5.56 5.56 2.5 5.56 5.56-2.5 5.56-5.56 5.56zm0-8.56c-1.66 0-3.06 1.34-3.06 3.06s1.34 3.06 3.06 3.06 3.06-1.34 3.06-3.06-1.34-3.06-3.06-3.06zm7.47 4.56h-1.62c-.25 0-.46.2-.46.46v3.16h2.08l-.27 2.21h-1.81v5.75c0 1.17-.97 2.13-2.13 2.13h-3.85c-1.17 0-2.13-.97-2.13-2.13v-5.75h-1.81v-2.21h1.81v-3.16c0-2.42 1.38-3.99 3.61-3.99h2.79v2.22h-1.84c-.92 0-1.67.75-1.67 1.67v2.22h3.36z" />
              </svg>
            </div>
            <div className="contact-item-detail">
              <h4>{contact.item5}</h4>
              <p>
                <a
                  href="https://www.instagram.com/gloriaamandagi/profilecard/?igsh=MXdkbDRmbzZuOGcwZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.instagram}
                </a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17v-6h2v6h-2zm0-8V7h2v3h-2z" />
              </svg>
            </div>
            <div className="contact-item-detail">
              <h4>{contact.item6}</h4>
              <p>
                <a
                  href="https://github.com/Gloriaamandagii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.github}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
