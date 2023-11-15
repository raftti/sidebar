// AccordionItem.js
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from './accordion.module.css';
import { clsx } from 'clsx';



const AccordionItem = ({ title, children, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionItemTitle} onClick={handleToggle}>
        <span className={clsx(styles.title, level > 1 ? styles.level2 : styles.level1)}>
          {title}
        </span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {isOpen && <div className={styles.accordionItemContent}>{children}</div>}
    </div>
  );
};

const Accordion = ({ children }) => {
  return <div className={styles.accordion}>{children}</div>;
}

const AccordionItemContent = ({ children }) => {
  return (
    <div className={styles.accordionItemContent}>
      {children}
    </div>
  );
};


export {AccordionItem, Accordion, AccordionItemContent};
