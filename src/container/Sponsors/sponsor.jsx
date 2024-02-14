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
                            action="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse" // Replace with your Google Form URL
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
