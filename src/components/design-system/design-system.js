import React from "react"

const H1 = ({ children }) => (
  <h1 className="text-3xl font-extrabold mt-4 mb-4">{children}</h1>
)

const H2 = ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>

const H3 = ({ children }) => (
  <h3 className="text-xl font-semibold">{children}</h3>
)

export default {
  h1: H1,
  h2: H2,
  h3: H3,
}
