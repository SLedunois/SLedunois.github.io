import React from "react"

const H1 = props => (
  <h1 className="text-3xl font-extrabold mt-4 mb-4" {...props}>
    {props.children}
  </h1>
)

const H2 = props => (
  <h2 className="text-2xl font-bold mt-3 mb-3" {...props}>
    {props.children}
  </h2>
)

const H3 = props => (
  <h3 className="text-xl font-semibold mt-2 mb-2" {...props}>
    {props.children}
  </h3>
)

export default {
  h1: H1,
  h2: H2,
  h3: H3,
}
