const Event = ({ event }) => {
  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>{event.created}</p>
      <button>show details</button>
    </li>
  );
};

export default Event;
