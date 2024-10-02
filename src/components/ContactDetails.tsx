import React from "react";
import { Contact } from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser, faMapMarkerAlt, faCity } from "@fortawesome/free-solid-svg-icons";

interface ContactDetailsProps {
  contact: Contact;
  onBack: () => void;
}

const ContactDetails = ({ contact, onBack }: ContactDetailsProps) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <FontAwesomeIcon icon={faUser} className="avatar" />
        <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
      </div>
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Street:</strong> {contact.street}</p>
        <p><FontAwesomeIcon icon={faCity} /> <strong>City:</strong> {contact.city}</p>
      </div>
      <button className="back-btn" onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to contact list
      </button>
    </div>
  );
};

export default ContactDetails;