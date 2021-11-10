import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/logo_white.png"
      width={500}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Ideopoly logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <div className="text-center text-white">Already have an account? Log in <a className="underline" href="https://app.ideopoly.com/">here</a></div>
    <div className="text-center text-white">Want to join the alpha test? Request an account <a className="underline" href="mailto:troy@ideopoly.com?subject=Invite me to the Ideopoly alpha test!">here</a></div>
  </Layout>
)

export default IndexPage
