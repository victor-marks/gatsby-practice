import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `fullstack`,
        `frontend`,
        `backend`,
        `hireME`,
      ]}
    />
    <h1>Hi people</h1>
    <p>Check out my coding skillz.</p>
    <p>Hire me if you see what you like.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
