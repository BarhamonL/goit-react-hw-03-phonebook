import React, { Component } from "react";
import { uuid } from "uuidv4";
import ContactEditor from "../contactEditor";
import ContactList from "../contactList";
import Section from "../section";
import Filter from "../filter";

class ContactFormManager extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidMount() {
    const persistedContakts = localStorage.getItem("contacts");
    if (persistedContakts) {
      this.setState({
        contacts: JSON.parse(persistedContakts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = (filter) => {
    this.setState({ filter });
  };
  handleAddContact = (name, number) => {
    const contact = {
      id: uuid(),
      name,
      number,
    };
    if (!name || !number) {
      alert(`all required fields are not filled`);
      return;
    }

    const alreadyRecordedContact = this.state.contacts.some(
      (contact) => contact.name === name
    );

    alreadyRecordedContact
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  handleDeleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };
  getVisibleContakt = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContakt = this.getVisibleContakt();
    return (
      <div className="Contact-FormManager">
        <Section title="Phonebook">
          <ContactEditor onAdd={this.handleAddContact} />
        </Section>

        {contacts.length > 0 && (
          <Section title="Contacts">
            {contacts.length > 1 && (
              <Filter value={filter} onChangeFilter={this.handleFilter} />
            )}
            <ContactList
              contacts={visibleContakt}
              onClose={this.handleDeleteContact}
            />
          </Section>
        )}
      </div>
    );
  }
}
export default ContactFormManager;
