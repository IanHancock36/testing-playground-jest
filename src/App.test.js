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


test('renders title', () => {
  render(<App />);
  // get all by role is what a li item uses 
  const title = screen.getByTestId("mytestid");
  // so there is 3 list items
  expect(title).toBeInTheDocument()
});



test('sum should be 3', () => {
  render(<App />);
  // get all by role is what a li item uses 
  const sum = screen.getByTitle("sum");
  // so there is 3 list items
  expect(sum.textContent).toBe("3");
});