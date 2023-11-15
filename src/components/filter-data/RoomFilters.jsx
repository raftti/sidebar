import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
} from "../accordion/Accordion";
import Checkbox from "../accordion/accordion-components/check-box/CheckBox";
import RadioGroup from "../accordion/accordion-components/radio-button/RadioGroup";
import RangeSelect from "../accordion/accordion-components/range-select/RangeSelect";
import styles from './room-filters.module.css'

const RoomFilters = ({ data }) => {
  const renderFilters = (filters) => {
    return Object.entries(filters).map(([groupName, groupFilters]) => (
      <div key={groupName}>
        <AccordionItem title={groupName} level={1}>
          <AccordionItemContent>
            {renderGroupFilters(groupFilters)}
          </AccordionItemContent>
        </AccordionItem>
      </div>
    ));
  };

  const renderGroupFilters = (groupFilters) => {
    return Object.entries(groupFilters).map(([filterName, filterDetails]) => (
      <div key={filterName}>
        <AccordionItem title={filterName} level={2}>
          <AccordionItemContent>
            {renderFilterDetails(filterDetails)}
          </AccordionItemContent>
        </AccordionItem>
      </div>
    ));
  };

  const renderFilterDetails = (filterDetails) => {
    if (filterDetails.type == "one_select") {
      return (
        <RadioGroup values={filterDetails.values} />
      )
    } 
    else if (filterDetails.type == "range") {
      const [{ min, max, step, state }] = filterDetails.values;
      return <RangeSelect min={min} max={max} step={step} state={state} />;
    }
    else {
      return (
        <div className={styles.checkBoxGroup}>
          {Object.values(filterDetails.values).map((item, index) => (
            <Checkbox key={index} title={item.name} />
          ))}
        </div>
      );
    }
  };

  return (
    <Accordion>
      {data.map((room, index) => (
        <div key={index}>
          {renderFilters(room.sidebar_filters)}
        </div>
      ))}
    </Accordion>
  );
};

export default RoomFilters;
