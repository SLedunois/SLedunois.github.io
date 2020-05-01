import React from "react"
import { Link } from "gatsby"

import "./header.css"

import accounts from "../../../data/accounts.json"

import back from "../../images/back.svg"

const Header = () => {
  return (
    <header className="mb-12">
      <nav className="justify-between flex items-center">
        <ul>
          <li>
            <Link to="/">
              <img src={back} alt="Go back home" />
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center">
          {Object.keys(accounts).map(account => {
            const image = require(`../../images/${account}.svg`)
            return (
              <li className="mr-4 ml-4 ">
                <a
                  href={accounts[account]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt={account} className="w-5" />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
