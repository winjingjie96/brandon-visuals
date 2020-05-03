import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyLogo from "../images/gatsby-icon.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink'}
}

const NavLink = props => <Link getProps= {isActive} {...props} />


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* Title / Logo Area */}
      <span>
        <img src={gatsbyLogo} alt="Gtasby Logo" style={{ margin: '0 5px', width: "50px" }} />
      </span>
      <h1 style={{ margin: 0 }}>
        <NavLink
          to="/"
        >
          {siteTitle}
        </NavLink>
      </h1>

<NavLink to = "/blog">Blog</NavLink>
<NavLink to = "/products">Store</NavLink>


      {/* Shopping Cart Summart */}
      <div className= "snipcart-summary snipcart-checkout"> 
        <div><strong>My Cart</strong>
        <div><span className="snipcart-total-items"></span>Items in cart</div>
        <div>Total price 
        <span className = 'snipcart-total-price'></span>
        </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
