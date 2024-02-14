import React from 'react';
import { Headings } from '../../components';
import './sponsor.css';

const Sponsor = () => {
    return (
        <div className="section-padding">
            <Headings title="Become a Sponsor" />
            <div className="contact" id="sponsor-contact">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <form
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBWIIYmgeC5Aqyh6Wyz6qaFN6LtdqEYtUYEqvGJkw5g7CSYA/formResponse" // Replace with your Google Form URL
                            method="post"
                            target="_blank"
                        >
                            <div className="form-group">
                                <label htmlFor="entry.123456789">Name*</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="entry.123456789" // Replace with your actual field ID
                                    name="entry.123456789" // Replace with your actual field ID
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="entry.987654321">Email*</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="entry.987654321" // Replace with your actual field ID
                                    name="entry.987654321" // Replace with your actual field ID
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="entry.987654321">Pledge Amount*</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="entry.987654321" // Replace with your actual field ID
                                    name="entry.987654321" // Replace with your actual field ID
                                    placeholder="$0.00"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="entry.987654321">Reason for wanting to support*</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="entry.987654321" // Replace with your actual field ID
                                    name="entry.987654321" // Replace with your actual field ID
                                    placeholder="Why do you want to help us?"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="entry.345678901">Messages for the team*</label>
                                <textarea
                                    className="form-control"
                                    id="entry.345678901" // Replace with your actual field ID
                                    name="entry.345678901" // Replace with your actual field ID
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-positivus w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;

/*
import React, { useState } from "react";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.2037917220": "",
    "entry.1146839265": "",
    "entry.1451219623": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSewQli5dBi0g1S8Ve-Bz6Xr7XP4W_27mBoVJwmftpsWTkFTVQ/formResponse?entry.2037917220=${formData["entry.2037917220"]}&entry.1146839265=${formData["entry.1146839265"]}&entry.1451219623=${formData["entry.1451219623"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.2037917220">Name:</label>
              <input
                required
                type="text"
                name="entry.2037917220"
                onChange={handleInputData("entry.2037917220")}
                value={formData["entry.2037917220"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1146839265">E-mail:</label>
              <input
                required
                type="email"
                name="entry.1146839265"
                onChange={handleInputData("entry.1146839265")}
                value={formData["entry.1146839265"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1451219623">Message:</label>
              <textarea
                required
                name="entry.1451219623"
                rows="4"
                cols="10"
                onChange={handleInputData("entry.1451219623")}
                value={formData["entry.1451219623"]}
                autoComplete={false}
              ></textarea>
            </fieldset>

            <button type="submit">Connect</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;

*/
