import React from "react";
import styles from "./ContactsDeal.module.css";
import axios from "axios";

export default function ContactsDeal({ dealsLink }) {
  const [deals, setDeals] = React.useState("");
  React.useEffect(() => {
    async function fetchDeals() {
      const res = await axios.get(
        `${dealsLink.split("https://lamppoststudios.api-us1.com/")[1]}`
      );
      if (res.data.deals.length >= 1) {
        var deals = res.data.deals.map(deal => deal.title);
        setDeals(deals.join(", "));
      }
    }
    fetchDeals();
  }, [dealsLink]);

  return <div className={styles.dealString}>{deals}</div>;
}
