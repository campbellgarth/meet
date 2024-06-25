import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberofEvents.feature');
defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;

    given('the user is on the main page', () => {
      AppComponent = render(<App />);
    });

    when("the user doesn't specify a number of events", () => {});

    then(
      /^the number of events shown should default to (\d+) events.$/,
      async (arg0) => {
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        });
      }
    );
  });

  test('User can change the number of events displayed.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given('the user is on the main page', () => {
      AppComponent = render(<App />);
    });

    when('the user specifies a number of events', async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;

      const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const NumberOfEventsInput =
        within(NumberOfEventsDOM).queryByRole('textbox');

      await user.clear(NumberOfEventsInput);

      await user.type(NumberOfEventsInput, '10');
    });

    then(
      'the number of events shown should be equal to the number the user specifies.',
      () => {
        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems =
          within(EventListDOM).queryAllByRole('listitem');

        expect(allRenderedEventItems.length).toBe(10);
      }
    );
  });
});
