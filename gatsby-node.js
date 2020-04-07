/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  /*const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Template = path.resolve("src/components/post/post.js")

    resolve(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              path
            }
          }
        }
      }
    `).then(result => {
      result.data.allMdx.edges.forEach(({ node }) => {
        const path = node.frontmatter.path
        console.log(path)
        createPage({
          path,
          component: Template,
          context: {
            pathSlug: path,
          },
        })

        resolve()
      })
    })
  })*/
  const { createPage } = actions
  const Template = path.resolve("src/components/post/post.js")
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(({ frontmatter }) => {
    const path = frontmatter.path
    createPage({
      path,
      component: Template,
      context: {
        slug: path,
      },
    })
  })
}
