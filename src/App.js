import React, { useEffect, useState, useCallback } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Axios from "axios";
function App() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const url = "https://api.themotivate365.com/stoic-quote";

  const fetchQuoteHandler = useCallback(() => {
    Axios.get(url)
      .then((response) => {
        console.log(response);
        setQuote(response.data.quote);
        setAuthor(response.data.author);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  //useEffect(callback, deps)
  useEffect(() => {
    fetchQuoteHandler();
  }, [fetchQuoteHandler]);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="App">
      <div className="quote-container">
        <div className="stoic-container" title="stoic">
          <h2>Stoicism Quote Generator</h2>
        </div>

        <ImQuotesLeft />
        <blockquote>{quote}</blockquote>
        <ImQuotesRight />
        <div className="authors">{author}</div>
      </div>
      <button onClick={fetchQuoteHandler}>Generate New Quote</button>
    </div>
  );
}

export default App;
