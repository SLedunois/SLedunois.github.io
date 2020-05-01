/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

class Layout extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === "/")
      document.getElementsByTagName("html")[0].classList.add("homepage")
    else document.getElementsByTagName("html")[0].classList.remove("homepage")
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
          <div className="layout container mx-auto text-black mb-8 pr-6 pl-6 pt-8">
            <div>
              <main>{children}</main>
            </div>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
