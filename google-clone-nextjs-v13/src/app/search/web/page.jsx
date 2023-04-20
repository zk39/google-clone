import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_key}&cx=${process.env.CONTEXT_key}&q=${searchParams.searchTerm}`)
  const data = await res.json();
  const temp = data.items;
 
    return <>{temp.map((res)=> <h1 key={res.title}>  {res.title}</h1>)}
    </>
}
