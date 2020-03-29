import React from "react";

export default function ContactsValue({ scoreValues }) {
  let sum;
  if (scoreValues.length >= 1) {
    sum = scoreValues.reduce(function(a, b) {
      return parseInt(a) + parseInt(b);
    }, 0);
  }
  return <div>{sum}</div>;
}
