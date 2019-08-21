// Test away!
import React from "react";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

import { render, fireEvent } from "@testing-library/react";

describe("<Controls />", () => {
  it("Button says 'unlock gate' or 'lock gate' ", () => {
    const controls = render(<Controls />);
    // const buttonText = controls.getByText("Unlock Gate");
    // console.log(buttonText);
    controls.debug();
    // displays elements debug
    expect(controls.getByText("Close Gate").textContent).toBe("Close Gate");
    //gets the close gate text exactly
    expect(controls.getByText("Lock Gate")).toBeTruthy();
    // any element within that component contains lock gate
    // to be truthy means the value exists
  });

  it("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const controls = render(<Dashboard />);
    const button = controls.getByTestId("button");
    const closeButton = controls.getByTestId("closeButton");
    console.log("button", button);
    expect(button.textContent).toBe("Lock Gate");
    expect(closeButton.textContent).toBe("Close Gate");
    fireEvent.click(closeButton);
    expect(closeButton.textContent).toBe("Open Gate");
    fireEvent.click(button);
    expect(button.textContent).toBe("Unlock Gate");

    // fireEvent.click(button);
  });
});
