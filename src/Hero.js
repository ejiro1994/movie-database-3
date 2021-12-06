import React from "react"
import Homepage from "./Homepage"
const Hero = (handleLogout) => {
	return (
		<div className='hero'>
			<nav>
				<h2>welcome</h2>
				<button onClick={handleLogout}>Logout</button>
			</nav>
			<Homepage />
		</div>
	)
}

export default Hero
