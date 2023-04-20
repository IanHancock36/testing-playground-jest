import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement).toBeInTheDocument();
});
test("username input should be empty", () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement.value).toBe("");
});
test("username input should change", () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  const testValue  ="test"
  fireEvent.change(userInputElement,{target:{value:testValue}})
  expect(userInputElement.value).toBe(testValue);
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  const testValue  ="test"
  expect(passwordInputElement).toBeInTheDocument();
});
test("password input should be empty", () => {
  render(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement.value).toBe("");
});
test("password input should change", () => {
  render(<Login />);
  const testValue  ="test"
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInputElement,{target:{value:testValue}})
  expect(passwordInputElement.value).toBe(testValue);
});

test("button should be rendered", () => {
  render(<Login />);
  const loginButtonElement = screen.getByRole("button");
  expect(loginButtonElement).toBeInTheDocument();
});
test("button should be disabled", () => {
  render(<Login />);
  const loginButtonElement = screen.getByRole("button");
  expect(loginButtonElement).toBeDisabled();
});

test("error message should not be visiable", () => {
  render(<Login />);
  const errorElement = screen.getByTestId("error");
  expect(errorElement).not.toBeVisible();
});

test("button should not be disabled when input exists", () => {
    render(<Login />);
    const loginButtonElement = screen.getByRole("button");
    const testValue  ="test"
    const userInputElement = screen.getByPlaceholderText(/username/i);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    fireEvent.change(userInputElement,{target:{value:testValue}})
    fireEvent.change(passwordInputElement,{target:{value:testValue}})
    expect(loginButtonElement).not.toBeDisabled();
  });
