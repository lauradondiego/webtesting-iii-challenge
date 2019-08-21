// Test away!
import React from "react";
import Display from "./Display";

import { render } from "@testing-library/react";

describe("<Display />", () => {
  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const display = render(<Display />);
    const isLocked = display.getByTestId("isLocked");
    const isOpen = display.getByTestId("isOpen");
    display.debug();
    expect(display.getByText(/unlocked/i)).toBeTruthy();
    expect(display.getByText("Open")).toBeTruthy();
    //getbytext gives you the element or error
    expect(display.queryByText("Closed")).toBeFalsy();
    expect(display.queryByText("Locked")).toBeFalsy();
    //getbyquery gives you element or null - way to test if falsy
    expect(isLocked.classList.contains("red-led")).toBeFalsy();
    expect(isOpen.classList.contains("green-led")).toBeTruthy();
  });
});
