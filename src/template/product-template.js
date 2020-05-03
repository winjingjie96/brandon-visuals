import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div
      style={{
        marginLeft: "0 auto",
        width: "100%",
        textAlign: "center",
      }}
    >
      {}
      <h2>
        {contentfulProduct.name}-{" "}
        <span style={{ color: "#ccc" }}>
          Added On
          {contentfulProduct.createdAt}
        </span>
      </h2>
      <p>{contentfulProduct.description}</p>
      <h4>${contentfulProduct.price}</h4>
      <button
        className="snipcart-add-item"
        data-item-id={contentfulProduct.typeField}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image[0].file.url}
        data-item-name={contentfulProduct.name}
        data-item-url={location.pathname}
      >
        Add to cart
      </button>
      <Img
        style={{ margin: "0 auto", maxWidth: 1200 }}
        fluid={contentfulProduct.image[0].fluid}
      />
    </div>
  </Layout>
)
export const query = graphql`
  query($typeField: String!) {
    contentfulProduct(typeField: { eq: $typeField }) {
      typeField
      id
      name
      price
      description
      createdAt(formatString: "MMMM, Do, YYYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`
export default ProductTemplate
