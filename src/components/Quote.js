import React from "react";
import { Header } from "semantic-ui-react";

export default function Quote({ quote }) {
  return (
    <Header as="h2" icon>
      <img src="/images/brainstorm.svg" alt="" />
      "{quote.quote}""
      <Header.Subheader>- {quote.author}</Header.Subheader>
    </Header>
  );
}
