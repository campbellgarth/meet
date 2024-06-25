import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element should be collapsed by default.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given('the user is on the event page', () => {
      AppComponent = render(<App />);
    });

    when('the user has not interacted with the event element', async () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the event element should be collapsed', async () => {
      await waitFor(() => {
        const eventList = AppDOM.querySelector('#event-details');
        expect(eventList).not.toBeInTheDocument();
      });
    });

    test('User can expand an event to see details.', ({
      given,
      when,
      then,
    }) => {
      let EventComponent;
      let allEvents;

      given('the user is on the event page', async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
      });

      when('the user clicks "see details"', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.getByText('show details');
        await user.click(showDetailsButton);
      });

      then('the event element should be expanded.', () => {
        const eventDetails =
          EventComponent.container.querySelector('#event-details');
        expect(eventDetails).toBeInTheDocument();
      });
    });

    test('User can collapse an event to hide details.', ({
      given,
      when,
      then,
    }) => {
      let EventComponent;
      let allEvents;
      given('the user is on the event page', async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
      });

      when('the user clicks "hide details"', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.getByText('show details'); //user must have at least toggled show details once for hide details to appear
        await user.click(showDetailsButton);
        const hideDetailsButton = EventComponent.getByText('hide details');
        await user.click(hideDetailsButton);
      });

      then('the event element should be collapsed', () => {
        const eventDetails =
          EventComponent.container.querySelector('#event-details');
        expect(eventDetails).not.toBeInTheDocument();
      });
    });
  });
});
