import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    street: string;
    city: string;
    profileImage: string;
  }

const Dashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [currentView, setCurrentView] = useState<number>(1);

    useEffect(() => {
        const fetchContactsData = async () => {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/Stian96/contact");
            if (!response.ok) {
                throw new Error("Failed to fetch contact list from api...")
            }
            const data = await response.json()
            setContacts(data)
        }
        fetchContactsData()
    }, [])

    const handleContactSelect = (contact: Contact) => setSelectedContact(contact);
    const handleBackToList = () => setSelectedContact(null);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <FontAwesomeIcon className="dashboard-icon" icon={faAddressBook} /> 
                <h1 className="dashboard-title">
                    React - Address Book
                </h1>
            </div>
            <div className="dashboard-content">
                <Menu currentView={currentView} setCurrentView={setCurrentView} />
                // TODO: Implement logic to render form or contact list.
                { selectedContact ? (
                    <ContactDetails contact={selectedContact} onBack={handleBackToList} />
                ) : (
                    <ContactList contacts={contacts} onContactSelect={handleContactSelect} />
                )}
            </div>
        </div>
    )
}

export default Dashboard;