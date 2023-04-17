import { useRouter } from "next/router"

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
  const router = useRouter()
  return (
   <div>
    <h1 className="text-2xl text-bold">Books</h1>
    <ul>
      {book.map((b) => {
         return (
          <li onClick={() => router.push(`/bookInfo/${b.slug.current}`)} key={b}>
            {b.name}
          </li>
       )
      })}
    </ul>
  </div>
 )
}