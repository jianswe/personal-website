import { getContentForBlogPost, getSlugsForPosts } from "@/content/queries"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const generateStaticParams = async () => {
    const data = await getSlugsForPosts()
    return data.blogPostCollection.items
}

export default async function Blog({ params }) {
    const data = await getContentForBlogPost(params.slug) 
    const content = data.blogPostCollection.items[0]
    console.log(content)

    return (
        <section>
            <h2>{content.title}</h2>
            {documentToReactComponents(content.body.json)}
        </section>
    )
}