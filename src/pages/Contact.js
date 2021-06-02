import React, { useState } from "react";
import Form from "../components/Form";

function Contact() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <h1>Contact:</h1>
      <h2>For more information about The Fitness zone:</h2>
      <p>
        <a href="mailto: Fatima.Ali@stud.sundsgarden.se">
          Fatima.Ali@stud.sundsgarden.se
        </a>
      </p>

      <p>
        <h3> More contact information </h3>
        <li>
          <u>+46406657000</u>
        </li>
        <li>
          <u>Postal Address</u>
        </li>
        <li>
          <u>Tech Support</u>
        </li>
      </p>
      <div>
        {status && (
          <Form
            closeModal={() => setStatus(false)}
            id="myModal"
            className="form"
          >
            <div className="modal-content">
              <div className="modal-box">
                <form action="">
                  <h2 class="main-info">
                    Would you like to contact us? Please fill the form below:
                  </h2>
                  <label for="name" class="label">
                    Full name
                  </label>
                  <input
                    type="text"
                    class="input-field"
                    placeholder="Your Name"
                  />
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="input-field"
                    placeholder="Your Email"
                  />
                  <div class="select-wrapper">
                    <label for="select" class="label">
                      Choose the topic for your message:
                    </label>
                    <select name="Developer" class="select" id="select">
                      <option value="feedback">Feedback</option>
                      <option value="Reporting">Reporting an Error</option>
                      <option value="other">Other option</option>
                    </select>
                  </div>
                  <div class="checkbox-container">
                    <label class="checkbox-label">
                      <input type="checkbox" checked />
                      <span class="checkbox-custome rectangular"></span>
                      <div class="input-title">
                        I would like to receive emails from this source.
                      </div>
                    </label>
                  </div>
                  <button type="submit" class="button">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </Form>
        )}
        <button onClick={() => setStatus(true)} id="myBtn" className="btn">
          Learn More..
        </button>
      </div>
    </div>
  );
}

export default Contact;
