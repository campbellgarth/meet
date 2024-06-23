import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventNumber, setEventNumber] = useState(32);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventNumber(value);
    setCurrentNOE(value);
  };
  return (
    <div id="number-of-events">
      <input
        type="text"
        value={eventNumber}
        placeholder="Specify number of events"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
