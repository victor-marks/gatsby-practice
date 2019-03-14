import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Secret = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>How did you find this top secret page??</h1>
    <p>
      Want to see something{" "}
      <a href="https://victor-marks.com" style={{ color: "blue" }}>
        cool
      </a>
      ?
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Secret
