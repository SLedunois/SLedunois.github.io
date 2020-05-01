import React from "react"

const Technology = ({ name }) => {
  const img = require(`../../images/technologies/${name}.svg`)
  return <img src={img} alt={name} className="mr-4 mt-1 mb-2" />
}

export default Technology
