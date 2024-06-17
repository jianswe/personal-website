import { getContentForHero } from "@/content/queries"

export default async function Hero() {
    const data = await getContentForHero()
    const content = data.heroCollection.items[0]

    return (
        <section>
            <p>{content.preTitle}</p>
            <h2>{content.title}</h2>
            <p>{content.subtitle}</p>
            <p>Currently, I&apos;m the Software Development Engineer of <a className="navlink" href="/project-1">AWS Support Center</a> at <a href="https://aws.amazon.com/" target="_blank">Amazon Web Service</a>, and I&apos;m looking for new career opportunities.</p>
        </section>
    )
}