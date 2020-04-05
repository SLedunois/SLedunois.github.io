/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Header from "../../header/header"

class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      if (document.location.pathname === "/")
        document.getElementsByTagName("html")[0].classList.add("homepage")
      else document.getElementsByTagName("html")[0].classList.remove("homepage")
    }
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div className="layout container mx-auto text-black">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              <main>{children}</main>
            </div>
          </div>
        )}
      />
    )
  }
}

/*const Layout = ({ children }) => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    ) {
      if (window.document.location.pathname === "/")
        window.document
          .getElementsByTagName("html")[0]
          .classList.add("homepage")
      else
        window.document
          .getElementsByTagName("html")[0]
          .classList.remove("homepage")
    }
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout container mx-auto text-black">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}*/

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
