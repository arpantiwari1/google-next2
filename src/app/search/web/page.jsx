import WebSearchResults from '@/components/WebSearchResults';
import { data } from 'autoprefixer';
import React from 'react'

async function WebSearchPage({searchParams}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}`

  );
  const data=await response.json();
  const result=data.items;
  // console.log(data);
  return (
    <div>
      {
        result && <WebSearchResults results={data}/>
        // <h1>hello</h1>
      }
    </div>

  )
}

export default WebSearchPage