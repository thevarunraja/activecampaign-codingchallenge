import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, wait } from "@testing-library/react";
import axiosMock from "axios";
import React from "react";
import ContactsTag from "../ContactsTag";

afterEach(cleanup);

describe("ContactsTag Component", () => {
  it("fetched and displays data", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        contactTags: [
          {
            contact: "856",
            tag: "7",
            cdate: "2019-02-21T10:22:02-06:00",
            created_timestamp: "2019-08-14 15:54:19",
            updated_timestamp: "2019-08-14 15:54:19",
            created_by: null,
            updated_by: null,
            links: {
              tag:
                "https://lamppoststudios.api-us1.com/api/3/contactTags/839/tag",
              contact:
                "https://lamppoststudios.api-us1.com/api/3/contactTags/839/contact"
            },
            id: "839"
          }
        ]
      }
    });
    const { container } = render(
      <ContactsTag
        contactTagsLink={
          "ContactsTag.js:6 https://lamppoststudios.api-us1.com/api/3/contacts/856/contactTags"
        }
      />
    );
    await wait(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(container).toMatchSnapshot();
    });
  });
});
