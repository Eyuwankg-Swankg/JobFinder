import React from 'react'
import { Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <h1>Eyuwankg</h1>
            <Link to="/signin">Sign In</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default Home
