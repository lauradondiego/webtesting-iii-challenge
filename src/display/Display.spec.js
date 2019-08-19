// Test away!
import React from "react";
import Display from "./Display";

import { render } from "@testing-library/react";

describe("<Display />", () => {
  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const display = render(<Display />);
    display.debug();
    expect(display.getByText(/unlocked/i)).toBeTruthy();
    expect(display.getByText("Open")).toBeTruthy();
    //getbytext gives you the element or error
    expect(display.queryByText("Closed")).toBeFalsy();
    expect(display.queryByText("Locked")).toBeFalsy();
    //getbyquery gives you element or null - way to test if falsy
    // expect(display.classList.contains("red-led"));
  });
});
