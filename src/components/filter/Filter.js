import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
