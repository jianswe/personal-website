import { getContentForLogoWall } from "@/content/queries"

const LogoWall = async () => {
    const data = await getContentForLogoWall()
    const content = data.assetCollection.items
    return (
        <>
            <h3>Major Languages and Frameworks I use</h3>
            <div className="bottomgrid">
                {content.map((logo) => (
                    <img key={logo.title} src={logo.url} alt={logo.title} />
                ))}
            </div>
        </>
    )
}

export default LogoWall
