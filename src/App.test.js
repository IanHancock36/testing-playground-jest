import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items', () => {
  render(<App />);
  // get all by role is what a li item uses 
  const listItems = screen.getAllByRole("listitem");
  // so there is 3 list items
  expect(listItems).toHaveLength(3);
});