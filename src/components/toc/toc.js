import React from "react"

export default ({ headings }) => (
  <ul>
    {headings.map(heading => (
      <a href={heading.url}>
        <li key={heading.url}>{heading.title}</li>
      </a>
    ))}
  </ul>
)
