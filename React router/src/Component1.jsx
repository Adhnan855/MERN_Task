import React from 'react'
import { Link } from 'react-router-dom'

const Component1 = () => {
    return (
        <div className="navbar">
          <ul><li>
              <Link to="/Component2">About</Link>
            </li>
            <li>
              <Link to="/Component3">Contacts</Link>
            </li>
          </ul>
        </div>)
}

export default Component1