import React from "react"

import HeaderBubble from "../components/header-bubble/header-bubble"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Description from "../components/description/description"

const IndexPage = () => (
  <HeaderBubble>
    <Layout>
      <SEO title="Home" />
      <Description />
    </Layout>
  </HeaderBubble>
)

export default IndexPage
