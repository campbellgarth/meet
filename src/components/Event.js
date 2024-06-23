import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    //toggle between showing and hiding details button
    setShowDetails(!showDetails);
  };
  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>{event.created}</p>
      {showDetails && ( //only show event.description if showDetails is toggled true
        <div id="event-details">
          <p>{event.description}</p>
        </div>
      )}
      <button
        className="details-btn"
        id={showDetails ? 'hide-details' : 'show-details'}
        onClick={handleToggleDetails}
      >
        {showDetails ? 'hide details' : 'show details'}
      </button>
    </li>
  );
};

export default Event;
