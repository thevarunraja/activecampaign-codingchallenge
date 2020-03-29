import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Header from "../Header";

afterEach(cleanup);

describe("Header Component", () => {
  it("matches snapshot", async () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
