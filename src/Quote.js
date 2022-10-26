import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Quote({ quote }) {
  return (
    <div className="quote-container">
      <div className="stoic-container" title="stoic">
        <h2 >Stoicism Quote Generator</h2>
      </div>
      <blockquote>
        <ImQuotesLeft />
        {quote.quote}
        <ImQuotesRight />
      </blockquote>
      <div className="authors">{quote.author}</div>
    </div>
  );
}

export default Quote;
