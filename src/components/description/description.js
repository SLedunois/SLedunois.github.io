/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import accounts from "../../../data/accounts.json"
import data from "../../../data/description.json"

const Description = ({ children }) => {
  return (
    <div className="flex font-medium items-center mx-auto text-2xl text-center w-3/4">
      <div>
        <p>{data.description}</p>
        <div>
          <ul className="flex items-center justify-center">
            {Object.keys(accounts).map(account => {
              const image = require(`../../images/${account}.svg`)
              return (
                <li className="mr-4 ml-4 mt-8" key={account}>
                  <OutboundLink
                    href={accounts[account]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image} alt={account} className="w-5" />
                  </OutboundLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Description
