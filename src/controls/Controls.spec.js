// Test away!
import React from "react";
import Controls from "./Controls";

import { render } from "@testing-library/react";

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
});
