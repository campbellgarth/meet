import Event from '../components/Event';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  beforeAll(async () => {
    allEvents = await getEvents();
  });

  test('renders event title', () => {
    EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });
  test('renders event location', () => {
    EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });
  test('renders event start time', () => {
    EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });
  test('renders event details button with the title (show details)', () => {
    EventComponent = render(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });
  test('by default, event details section should be hidden', () => {
    EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.container.querySelector('#event-details')
    ).not.toBeInTheDocument();
  });
  test('shows the details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    EventComponent = render(<Event event={allEvents[0]} />);
    const showDetailsButton = EventComponent.getByText('show details');
    await user.click(showDetailsButton);
    const eventDetails =
      EventComponent.container.querySelector('#event-details');
    expect(eventDetails).toBeInTheDocument();
  });
  test('hides the details section when the user clicks on the "hide details" button', async () => {
    const user = userEvent.setup();
    EventComponent = render(<Event event={allEvents[0]} />);
    const showDetailsButton = EventComponent.getByText('show details'); //user must have at least toggled show details once for hide details to appear
    await user.click(showDetailsButton);
    const hideDetailsButton = EventComponent.getByText('hide details');
    await user.click(hideDetailsButton);
    const eventDetails =
      EventComponent.container.querySelector('#event-details');
    expect(eventDetails).not.toBeInTheDocument();
  });
});
