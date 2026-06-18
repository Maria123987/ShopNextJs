import React from 'react'

const fetchQuotes = async () => {
    const res = await fetch('https://dummyjson.com/quotes')
    const data = await res.json()
    return data.quotes;
}

const Quotes = async () => {
    let quotes = await fetchQuotes();

    return (
        <div className='container'>
            <h2 className="text-center mt-5">Quotes</h2>
            {
                quotes.map((quotes) => {
                    return (
                        <div key={quotes.id}>
                            <p>Quote: {quotes.quote}</p>
                            <p>Author: {quotes.author}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Quotes