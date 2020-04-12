import React from "react"

import "./post-header.css"
import bgArticle from "../../images/article-background.svg"

export default ({ title, description }) => (
  <div className="post-header pt-6">
    <img src={bgArticle} alt="background" className="background" />
    <h1 className="text-4xl font-extrabold">{title}</h1>
    <p>{description}</p>
  </div>
)
