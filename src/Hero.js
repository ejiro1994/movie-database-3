import React from "react"
import Homepage from "./Homepage"
import fire from "./fire"
const Hero = (handleLogout, handleLogin) => {

	const logout = () => {
		        fire.auth().signOut();

	}
	return (
		<div className='hero'>
				<button onClick={logout}>Logout</button>

			<nav>
				<h2>welcome</h2>
			</nav>
			<Homepage />
		</div>
	)
}

export default Hero
