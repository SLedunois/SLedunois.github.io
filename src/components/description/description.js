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
    <div className="flex font-medium items-center mx-auto text-2xl text-center w-3/4">
      <p>{data.description}</p>
    </div>
  )
}

export default Description
