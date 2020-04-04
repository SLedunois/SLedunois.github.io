import PropTypes from "prop-types"
import React from "react"

import "./header.css"

import accounts from "../../data/accounts.json"

import github from "../images/github.svg"
import twitter from "../images/twitter.svg"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="justify-between flex">
      <ul className="flex justify-around mb-10 font-medium">
        <li className="active">Home</li>
        <li>About</li>
      </ul>
      <ul className="flex justify-around mb-10 font-medium">
        <li>
          <a href={accounts.github} target="_blank">
            <img src={github} />
          </a>
        </li>
        <li>
          <a href={accounts.twitter} target="_blank">
            <img src={twitter} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
