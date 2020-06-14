import React, { Component } from "react";
import ContactFormManager from "../contactFormManager";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    contacts: [],
  };
  render() {
    return (
      <div className={styles.container}>
        <h1>goit-react-hw-02-phonebook</h1>
        <ContactFormManager />
      </div>
    );
  }
}
