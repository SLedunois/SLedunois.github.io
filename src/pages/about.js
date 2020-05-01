import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DesignSystem from "../components/design-system/design-system"

import about from "../../data/about.json"

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />
    <div className="flex justify-center">
      <div className="text-lg">
        <DesignSystem.h1>About</DesignSystem.h1>
        {about.description.map(paragraph => (
          <p className="mt-4">{paragraph}</p>
        ))}
      </div>
    </div>
  </Layout>
)

export default About
