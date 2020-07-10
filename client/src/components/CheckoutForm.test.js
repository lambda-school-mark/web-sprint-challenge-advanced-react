import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByText } = render(<CheckoutForm />);
  const button = getByText(/Checkout Now/i);
  fireEvent.click(button);
  const successMessage = getByText(/You have ordered some plants! Woo-hoo!/i);
  expect(successMessage).toBeInTheDocument();
});

test("First input is labeled First Name", () => {
  const { getByText } = render(<CheckoutForm />);
  const FirstInput = getByText(/First Name:/i);
  expect(FirstInput).toBeInTheDocument();
});

test("Second input is labeled Last Name", () => {
  const { getByText } = render(<CheckoutForm />);
  const SecondInput = getByText(/Last Name:/i);
  expect(SecondInput).toBeInTheDocument();
});
