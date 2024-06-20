import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let textbox;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
    textbox = NumberOfEventsComponent.queryByRole('textbox');
  });

  test('has an element with "textbox" role', () => {
    expect(textbox).toBeInTheDocument();
  });
  test('default number of elements should be 32', () => {
    expect(textbox).toHaveValue('32');
  });
  test('number of event elements should change with user input', async () => {
    const user = userEvent.setup();
    await user.type(textbox, '{backspace}{backspace}10');
    expect(textbox).toHaveValue('10');
  });
});
