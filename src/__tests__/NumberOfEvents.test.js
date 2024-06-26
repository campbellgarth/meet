import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let textbox;

  test('has an element with "textbox" role', () => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} /> //dummy prop passed so that it is defined
    );
    textbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });
  test('default number of elements should be 32', () => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} /> //dummy prop passed so that it is defined
    );
    textbox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textbox).toHaveValue('32');
  });
  test('number of event elements should change with user input', async () => {
    const user = userEvent.setup();
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} /> //dummy prop passed so that it is defined
    );
    textbox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(textbox, '{backspace}{backspace}10');
    expect(textbox).toHaveValue('10');
  });
});
