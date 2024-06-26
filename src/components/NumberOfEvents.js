import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventNumber, setEventNumber] = useState(32);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    setEventNumber(value);
    let errorText; //if user puts a number less than 1 or greater than 50, or any non-number character, then throw an error
    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 100) {
      errorText = 'Events must be an integer between 1 and 100';
    } else {
      errorText = '';
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };
  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
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
