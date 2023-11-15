// RangeSelect.js
import React, { useState, useEffect } from "react";
import styles from "./rangeSelect.module.css";

const RangeSelect = ({ min, max, step, state }) => {
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    setRangeValue(state);
  }, [min, max, step, state]);

  return (
    <div className={styles.rangeComponent}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        name=""
        value={rangeValue}
        onChange={(e) => {
          setRangeValue(e.target.value);
        }}
      />
      <div className={styles.minMixDiv}>
        <span>{min}</span>
        <span>{rangeValue}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default RangeSelect;
