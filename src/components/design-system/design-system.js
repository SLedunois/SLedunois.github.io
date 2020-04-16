import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "../../styles/monokai"

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

const Pre = props => {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`p-8 rounded-lg ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  pre: Pre,
}
