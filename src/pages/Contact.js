import React, { useState } from "react";
import Form from "../components/Form";

function Contact() {
  const [status, setStatus] = useState(false);
  return (
    <div className="container2">
      <h1>GET HELP</h1>
      <div className="textbox">
        <p>
          You can find our switchboard number below. Please scroll down to
          contact the responsible team for more specific questions.
        </p>
        <h3>Registered address:</h3> Fitness Retail B.V. <br />
        Colosseum 1 1213 NL <br />
        Hilversum Netherlands
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
                        Choose your topic:
                      </label>
                      <select name="Developer" class="select" id="select">
                        <option value="feedback">Feedback</option>
                        <option value="Reporting">Reporting an Error</option>
                        <option value="other">Other options</option>
                      </select>
                    </div>
                    <div class="checkbox-container">
                      <label class="checkbox-label">
                        <input type="checkbox" />
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
          <div>
            <h4>Need more Information? </h4>
            <button
              onClick={() => setStatus(true)}
              id="myBtn"
              className="cart-btn"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
