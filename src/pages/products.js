import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Products =  ({ data: {allContentfulProduct}}) => (
    <Layout>
        <div>
        {allContentfulProduct.edges.map(({node: product}) => (
            <div key = {product.id} >
            <h2>Brandon Prints</h2>
            <Link to = {`/products/${product.typeField}`}>
            <h3>{product.name} ${product.price} </h3>
            </Link>
            <Img 
            style = {{maxWidth:600 }}
            fluid = {product.image[0].fluid}

            />
            </div>

        ))}
        </div>
    </Layout>
)


export const query = graphql `
{
    allContentfulProduct {
    edges {
        node {
            id 
            typeField
            name
            price
            image {
                fluid(maxWidth: 800){
                    ...GatsbyContentfulFluid_tracedSVG

                }
            }
          }
        }
    }

}`

export default Products