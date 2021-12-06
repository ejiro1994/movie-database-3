import React from "react"
import Homepage from "./Homepage"
import fire from "./fire"
const Hero = (handleLogout, handleLogin, user) => {

	const logout = () => {
		        fire.auth().signOut();

	}
	return (
		<div className='hero'>

			<nav className='logout'>
				<h2>welcome {user}</h2>               
				<button onClick={logout}>Logout</button>

			</nav>
			<Homepage />
		</div>
	)
}

export default Hero
