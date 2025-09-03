import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const contacts = [
  { name: "Dolar Rutvik", email: "rutvikcoding@gmail.com" },
  { name: "Darshan Raval", email: "dravel937@rku.ac.in" },
  { name: "Devarsh Jasani", email: "djasani912@rku.ac.in" },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to any of us:</p>
      {contacts.map((person, index) => (
        <div key={index} className="contact-entry">
          <p><strong>Name:</strong> {person.name}</p>
          <a
            className="mail-btn"
            href={`mailto:${person.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              Email: {person.email}
            </Button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
