import React, {useState} from "react";
import Header from "./components/header/Header";

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
        handleLogout,
        toggle,
        user
    } = props;
    console.log(hasAccount);

    const toggleInputs = () => {
      
        console.log();
        hasAccount ? setHasAccount(false) : setHasAccount(true)

        
    }

    return (
        <div className="login">
            <Header />
            <div className="loginContainer">
            <h1 className='userLoginTitle'>Movie database app user Login</h1>

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
					<><div>
					<button onClick={handleLogin}> Sign in</button>
					{/* <p onClick={() => setHasAccount(!setHasAccount)}>Don't have an account ? <span >Sign up</span></p> */}
					<button onClick={toggleInputs}> Don't have an account ? <span >Sign up</span></button>
					</div></>
				 : 
					<><div>
					<button onClick={handleSignup}> Sign up</button>
					<button onClick={toggleInputs}> Have an account ? <span >Sign in</span></button>
					</div></>
				
			}


				</div>
            </div>
        </div>
    );
};

export default Login;
