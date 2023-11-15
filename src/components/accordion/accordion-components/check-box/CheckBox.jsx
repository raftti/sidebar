import  { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./checkbox.module.css";

const Checkbox = ({ title, state }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(state);
  }, []);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <span
        className={`${styles.customCheckbox} ${isChecked ? styles.checked : ""}`}
        onClick={handleCheckboxClick}
      >
        {isChecked && <FaCheck className={styles.checkIcon} />}
      </span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Checkbox;
