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
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });
  test('renders event title', () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });
  test('renders event location', () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });
  test('renders event start time', () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });
  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });
  test('by default, event details section should be hidden', () => {
    expect(
      EventComponent.container.querySelector('#event-details')
    ).not.toBeInTheDocument();
  });
  test('shows the details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.getByText('show details');
    await user.click(showDetailsButton);
    const eventDetails =
      EventComponent.container.querySelector('#event-details');
    expect(eventDetails).toBeInTheDocument();
  });
  test('hides the details section when the user clicks on the "hide details" button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.getByText('show details');
    await user.click(showDetailsButton);
    const hideDetailsButton = EventComponent.getByText('hide details');
    await user.click(hideDetailsButton);
    const eventDetails =
      EventComponent.container.querySelector('#event-details');
    expect(eventDetails).not.toBeInTheDocument();
  });
});
