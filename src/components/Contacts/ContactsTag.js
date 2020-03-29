import React from "react";
import axios from "axios";

export default function ContactsTag({ contactTagsLink }) {
  const [tags, setTags] = React.useState("");

  React.useEffect(() => {
    async function fetchTags() {
      const res = await axios.get(
        `${contactTagsLink.split("https://lamppoststudios.api-us1.com/")[1]}`
      );
      if (res.data.contactTags.length >= 1) {
        var tags = res.data.contactTags.map(tag => tag.tag);
        setTags(tags.join(", "));
      }
    }
    fetchTags();
  }, [contactTagsLink]);
  return <div>{tags}</div>;
}
