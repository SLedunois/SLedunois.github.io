/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import data from "../../../data/description.json"

const Description = ({ children }) => {
  return (
    <div className="mt-16 mb-1 w-3/4 mx-auto text-center text-2xl font-medium">
      <p>{data.description}</p>
    </div>
  )
}

export default Description
