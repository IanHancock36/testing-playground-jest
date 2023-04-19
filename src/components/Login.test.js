
import { render, screen } from '@testing-library/react';
import Login from "./Login";


test("username input should be rendered", () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement).toBeInTheDocument();
});
test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement).toBeInTheDocument();
});


test("button should be rendered", () => {
  render(<Login />);
  const loginButtonElement = screen.getByRole("button");
  expect(loginButtonElement).toBeInTheDocument();
});


