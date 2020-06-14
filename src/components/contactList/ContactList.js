import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onClose }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}: </p>
        <span> {number}</span>

        <button className={styles.delete} onClick={() => onClose(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ContactList;
