import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Description from "../components/description/description"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Description />
  </Layout>
)

export default IndexPage
