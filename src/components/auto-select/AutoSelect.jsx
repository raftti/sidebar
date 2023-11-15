import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import clsx from "clsx";
import styles from "./autoSelect.module.css";

const AutoSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={clsx(styles.autoSelect, { [styles.autoSelectOpen]: isOpen })}>
      <div className={styles.selectedValue} onClick={toggleDropdown}>
        {selectedOption ? (
          selectedOption.label
        ) : (
          <span className={styles.span}>{placeholder? placeholder : 'Любой'}</span>
        )}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options?.map((option) => (
         <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={clsx(styles.listItem, { [styles.selected]: selectedOption === option })}
            >
              <p className={styles.listItemText}>{option.label}</p>
              {selectedOption === option && <FiCheck />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSelect;
