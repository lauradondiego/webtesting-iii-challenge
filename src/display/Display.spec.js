// Test away!
import React from "react";
import Display from "./Display";

import { render } from "@testing-library/react";

describe("<Display />", () => {
  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const display = render(<Display />);
    display.debug();
    expect(display.getByText("Unlocked")).toBeTruthy();
  });
});
