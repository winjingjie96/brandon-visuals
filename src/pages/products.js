import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import netlifyIdentity from "netlify-identity-widget"

class Products extends React.Component {
    state = {
        products : []
    }
  componentDidMount() {
    this.getProducts()
    netlifyIdentity.on('login', user => this.getProducts (user))
    netlifyIdentity.on('logout', () => this.getProducts ())
  }
  getProducts = () => {
    const allProducts = this.props.data.allContentfulProduct.edges
    const products = netlifyIdentity.currentUser() !== null
      ? allProducts
      : allProducts.filter(({ node: product }) => !product.private)
      this.setState({ products })
  }
  render() {
    const {products} = this.state
    return (
      <Layout>
        <div>
          {products.map(({ node: product }) => (
            <div key={product.id}>
              <h2>Brandon Prints</h2>
              <Link to={`/products/${product.typeField}`}>
                <h3>
                  {product.name} ${product.price}{" "}
                </h3>
              </Link>
              <Img style={{ maxWidth: 600 }} fluid={product.image[0].fluid} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          private
          typeField
          name
          price
          image {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Products
