import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import ContactsName from "../ContactName";

afterEach(cleanup);

describe("ContactsName Component", () => {
  it("matches snapshot", async () => {
    const { container } = render(
      <ContactsName firstName={"Barbara"} lastName={"Doe"} />
    );
    expect(container).toMatchSnapshot();
  });
});
