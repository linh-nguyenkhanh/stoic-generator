import React, {useEffect, useState} from 'react'
import Quote from "./Quote"

function App() {
  const [quote, setQuote] = useState("")
  const [authors, setAuthors] = useState("")
  // 'https://api.themotivate365.com/stoic-quote'

  //useEffect(callback, deps)
  useEffect(() =>{
    fetch('https://api.themotivate365.com/stoic-quote')
    .then((res) => res.json())
    .then(quote =>{
      setQuote(quote)
      setAuthors(authors)
    });
  },[authors]);

  //make button to fetch
  const fetchNewQuote = () =>{
    fetch('https://api.themotivate365.com/stoic-quote')
    .then((res) => res.json())
    .then(quote =>{
      setQuote(quote);
  });
  }

  return (
    <div className="App">
      <Quote quote={quote}/>
      <button onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
