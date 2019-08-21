// Test away
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("shows the 'Controls' and 'Display' components", () => {
    const dashboard = render(<Dashboard />);
    dashboard.debug();
    expect(dashboard.getByText("Unlocked")).toBeTruthy();
    expect(dashboard.getByText("Open")).toBeTruthy();
    expect(dashboard.getByText("Lock Gate")).toBeTruthy();
    expect(dashboard.getByText("Close Gate")).toBeTruthy();
  });
});
