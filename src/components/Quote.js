import React from "react";
import { Header } from "semantic-ui-react";

export default function Quote({ quote }) {
  return (
    <Header as="h2">
      <img src="/images/brainstorm.svg" alt="" />

      {quote && quote.quote}
      <Header.Subheader content={quote.author} />
    </Header>
  );
}
