import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="" className="brand-logo">My Blog</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
          <li>
            <Link to="/createpost">Create Post</Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav;
