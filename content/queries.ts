import { BlogPostQuery, HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getSlugsForPosts = async () => {
    const query = `$graphql
         query SlugsForPost() {
            blogPostCollection {
                items {
                    slug
                }
            }
        }
    `

    const data = await contentGqlFetcher<{
        blogPostCollection: {
            items: { slug: string }[]
        }
    }>({query})
    
    if(!data) {
        throw new Error("oops")
    }
    return data
}

export const getContentForBlogPost = async (slug: string) => {
    const query = `#graphql
        query BlogPostCollection($where: BlogPostFilter) {
            blogPostCollection(where: $where) {
                items {
                    title
                    slug
                    blog {
                        logo {
                            url
                            width
                            height
                        }
                        name
                    }
                    body {
                        json
                    }
                }
            }
        }
    `

    const data = await contentGqlFetcher<BlogPostQuery>({query, variables: {
        where: {
            slug, 
        },
    }})

    if (!data) {
        throw new Error('oops')
    }
    return data
}

export const getContentForHeaderNav = async () => {
    const query = `#graphql
        query NavigationCollection($where: NavigationFilter) {
            navigationCollection(where: $where) {
                items {
                    name
                    linksCollection {
                        items {
                            label
                            link
                        }
                    }
                }
            }
        }
    `

    const data = await contentGqlFetcher<HeaderNavQuery>({query, variables: {
        "where": {
            "name": "Header"
        }
    }})

    if(!data) {
        throw new Error("oops")
    }

    return data
}

export const getContentForLogoWall = async () => {
    const query = `#graphql
        query Asset($where: AssetFilter) {
            assetCollection(where: $where) {
                items {
                    width
                    url
                    title
                    height
                }
            }
        }
    `

    const data = await contentGqlFetcher<LogoWallQuery>({query, variables: {
        "where": {
            "title_contains": "logo"
        }
    }})

    if(!data) {
        throw new Error("oops")
    }

    return data
}

export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
                title
                subtitle
                preTitle
                callToActionsCollection {
                    items {
                        link
                        label
                    }
                }
            }
        }
    }
    `

    const data = await contentGqlFetcher<HeroQuery>({query})
    
    if(!data) {
        throw Error("oops")
    }

    return data
}

