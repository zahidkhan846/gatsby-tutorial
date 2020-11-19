import React from "react"
import { Link } from "gatsby"
import "./Header.css"

function Header(props) {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/gettingData">Data</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
