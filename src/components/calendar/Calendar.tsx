import React, { useState } from "react";
import styles from "./dropdownCalendar.module.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e);
  };

  return (
    <div className="dropdown-calendar">
      <input
        className={styles.selectedValue}
        type="date"
        value={selectedDate}
        onChange={(e) => {
          handleDateChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Calendar;
