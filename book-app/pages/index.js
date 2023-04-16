export async function getServerSideProps(){
  const query = encodeURIComponent(`*[ _type == "book" ]`)
  const projectID = process.env.YOUR_PROJECT_ID
  const url = `https://${projectID}.api.sanity.io/v1/data/query/production?query=${query}`
  const response = await fetch(url).then(res => res.json())
  return {
    props: {
      book: response.result
    }
  }
}

export default function Home({ book }) {
  return (
   <div>
    <h1>Books</h1>
    <ul>
      {book.map((b) => {
         return (
          <li key={b}>
            {b.name}
          </li>
       )
      })}
    </ul>
  </div>
 )
}