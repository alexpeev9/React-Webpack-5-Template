import { screen, render } from '@testing-library/react';
import App from '.';

describe('App Component', () => {
  test("Check if heading has a value - 'Template'", () => {
    render(<App />);
    screen.getByText('Template');
  });
});
