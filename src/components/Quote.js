import React from "react";
import { Header } from 'semantic-ui-react'

const Quote = ({ quote }) => {
  return (
		<Header as='h2' icon>
			<img src="https://image.flaticon.com/icons/svg/543/543131.svg" alt="" />
			"{ quote.quote }""
			<Header.Subheader>
				- { quote.author }
			</Header.Subheader>
		</Header>
  );
};

export default Quote;
