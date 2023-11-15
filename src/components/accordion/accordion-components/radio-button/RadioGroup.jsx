import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { clsx } from "clsx";
import styles from "./radioButton.module.css";

const RadioGroup = ({ values }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (value) => {
    if (value === selectedOption) {
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
    }
  };

  return (
    <div className={styles.radioButtonGroup}>
      {Object.entries(values).map(([elementKey, elementValue], index) => (
        <RadioButton key={index} index={index} title={elementValue.name} />
      ))}
    </div>
  );

  function RadioButton({ index, title }) {
    return (
      <label className={styles.radioLabel}>
        <span className={clsx(styles.radioButton, { [styles.active]: selectedOption === index })}>
          <FaCheck width={5} height={5} />
        </span>
        <input
          style={{ display: "none" }}
          type="radio"
          name="radioGroup"
          value={index}
          checked={selectedOption === index}
          onClick={() => handleRadioChange(index)}
        />
        <span className={styles.title}>{title}</span>
      </label>
    );
  }
};

export default RadioGroup;