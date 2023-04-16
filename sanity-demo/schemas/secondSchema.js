export default {
    type: "document",
    name: "book",
    title: "Book",
    fields: [
        {
        type: "string",
        name: "name",
        title: "Book Name"
        },
        {
        type: "slug",
        name: "slug",
        title: "Slug"
        },
        {
        type: "image",
        name: "image",
        title: "Book Image"
        },
        {
        type: "reference",
        name: "author",
        title: "Author",
        to: { type: "author"}
        }
        ]
  }