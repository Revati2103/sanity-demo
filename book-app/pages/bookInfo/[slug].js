
import imageUrlBuilder from "@sanity/image-url"

export const getServerSideProps = async context => {

    const pageSlug = context.query.slug
    const query = encodeURIComponent(`*[ slug.current == "${pageSlug}" && _type == "book" ]`)
    const projectID = process.env.YOUR_PROJECT_ID
    const url = `https://${projectID}.api.sanity.io/v1/data/query/production?query=${query}`

    const response = await fetch(url).then(res => res.json())
    const book = response.result[0].name
    const builder = imageUrlBuilder({
    projectId: projectID,
    dataset: "production"
})
const bookImage = builder.image(response.result[0].image).url()
const author = await getAuthor(response.result[0].author._ref)
return {
  props: {
    book: book,
    bookImage: bookImage,
    author: author
  }
 }

}

async function getAuthor(id){
    const query = encodeURIComponent(`*[ _id == "${id}" ]`)
    const url = `https://${process.env.YOUR_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`
    const response = await fetch(url).then(res => res.json())
      return(response.result[0].name)
  }

  export default function BookInfo({ book, bookImage, author })
  {return(
    <div>
      <img src={bookImage} height="350" />
        <div>{book} is a book published by <b>{author}</b> </div>
    </div>
  )
}