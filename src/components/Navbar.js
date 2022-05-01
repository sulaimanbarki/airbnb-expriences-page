// import React from 'react'
// import logo from "../images/logo.png"

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <img src={logo} alt='Airbnb Logo' />
//     </nav>
//   )
// }

import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src={require("../images/logo.png")} className="nav--logo" />
        </nav>
    )
}