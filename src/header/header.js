import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./header.css"

import accounts from "../../data/accounts.json"

import github from "../images/github.svg"
import twitter from "../images/twitter.svg"

const Header = ({ siteTitle }) => {
  const currentPath =
    typeof window !== `undefined` ? document.location.pathname : ""
  return (
    <header className="mb-20 pt-12">
      <nav className="justify-between flex">
        <ul className="flex justify-around font-medium">
          <li className={currentPath === "/" && "active"}>
            <Link to="/">Home</Link>
          </li>
          <li className={currentPath === "/about" && "active"}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="flex justify-around font-medium">
          <li>
            <a href={accounts.github} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Github" />
            </a>
          </li>
          <li>
            <a
              href={accounts.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
