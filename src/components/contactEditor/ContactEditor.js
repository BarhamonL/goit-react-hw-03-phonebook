import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactEditor.module.css";

export default class ContactEditor extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    this.props.onAdd(name.value, number.value);
    name.value = "";
    number.value = "";
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="*Enter contacts name"
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            placeholder="*Enter contacts number"
            onChange={this.handleChange}
          ></input>
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
