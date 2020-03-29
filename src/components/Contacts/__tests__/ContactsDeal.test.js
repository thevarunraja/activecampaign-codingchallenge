import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, wait } from "@testing-library/react";
import axiosMock from "axios";
import React from "react";
import ContactsDeal from "../ContactsDeal";

afterEach(cleanup);

describe("ContactsDeal Component", () => {
  it("fetched and displays data", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        deals: [
          {
            hash: "2b355af9",
            owner: "1",
            contact: "740",
            organization: "209",
            group: "1",
            stage: "1",
            title: "tree",
            description: "",
            percent: "0",
            cdate: "2019-10-14T15:20:41-05:00",
            mdate: "2019-12-06T16:06:55-06:00",
            nextdate: null,
            nexttaskid: null,
            value: "300",
            currency: "usd",
            winProbability: null,
            winProbabilityMdate: null,
            status: "0",
            activitycount: "3",
            nextdealid: "619",
            edate: "2019-11-11 09:34:55",
            links: {
              dealActivities:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/dealActivities",
              contact:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/contact",
              contactDeals:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/contactDeals",
              group:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/group",
              nextTask:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/nextTask",
              notes:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/notes",
              account:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/account",
              customerAccount:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/customerAccount",
              organization:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/organization",
              owner:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/owner",
              scoreValues:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/scoreValues",
              stage:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/stage",
              tasks:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/tasks",
              dealCustomFieldData:
                "https://lamppoststudios.api-us1.com/api/3/deals/616/dealCustomFieldData"
            },
            id: "616",
            isDisabled: false,
            account: "209",
            customerAccount: "209"
          },
          {
            hash: "4fde94e2",
            owner: "1",
            contact: "740",
            organization: "57",
            group: "1",
            stage: "1",
            title: "yfoyfoyfoy",
            description: "",
            percent: "0",
            cdate: "2019-11-04T09:04:16-06:00",
            mdate: "2019-11-04T09:05:27-06:00",
            nextdate: null,
            nexttaskid: "0",
            value: "353538300",
            currency: "usd",
            winProbability: null,
            winProbabilityMdate: null,
            status: "0",
            activitycount: "2",
            nextdealid: "682",
            edate: "2019-11-04 09:31:41",
            links: {
              dealActivities:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/dealActivities",
              contact:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/contact",
              contactDeals:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/contactDeals",
              group:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/group",
              nextTask:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/nextTask",
              notes:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/notes",
              account:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/account",
              customerAccount:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/customerAccount",
              organization:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/organization",
              owner:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/owner",
              scoreValues:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/scoreValues",
              stage:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/stage",
              tasks:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/tasks",
              dealCustomFieldData:
                "https://lamppoststudios.api-us1.com/api/3/deals/682/dealCustomFieldData"
            },
            id: "682",
            isDisabled: false,
            nextTask: null,
            account: "57",
            customerAccount: "57"
          }
        ]
      }
    });
    const { container } = render(
      <ContactsDeal
        dealsLink={
          "https://lamppoststudios.api-us1.com/api/3/contacts/856/deals"
        }
      />
    );
    await wait(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(container).toMatchSnapshot();
    });
  });
});
