import React, {useState} from "react";

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        toggle
    } = props;
    console.log(hasAccount);

    const sendmessage = () => {
      
        console.log();
        hasAccount ? setHasAccount(false) : setHasAccount(true)

        
    }

    return (
        <div className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
				<p className='errorMsg'>{passwordError}</p>
				<div className='btnContainer'>

			

         

				{hasAccount ? 
					<>
					<button onClick={handleLogin}> Sign in</button>
					{/* <p onClick={() => setHasAccount(!setHasAccount)}>Don't have an account ? <span >Sign up</span></p> */}
					<button onClick={sendmessage}> Don't have an account ? <span >Sign up</span></button>

					</>
				 : 
					<>
					<button onClick={handleSignup}> Sign up</button>
					<button onClick={sendmessage}> Have an account ? <span >Sign in</span></button>
					</>
				
			}


				</div>
            </div>
        </div>
    );
};

export default Login;
