import { render, screen } from "@testing-library/react";
import { Button } from "./";

it("renders a button", () => {
  const rendered = render(<Button />);
  expect(rendered).not.toBe(null);
});
