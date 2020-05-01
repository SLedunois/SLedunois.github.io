import React from "react"

import "./toc.css"

export default ({ headings }) => (
  <div className="table-of-contents mt-8 mb-8">
    <h2 className="text-lg font-extrabold">Table of contents</h2>
    <ul>
      {headings.map(heading => (
        <li key={heading.url}>
          <a href={heading.url}>{heading.title}</a>
        </li>
      ))}
    </ul>
  </div>
)
