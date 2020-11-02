import React, { useState} from 'react'
import '../Components/Login.css';
import { Link, useHistory } from "react-router-dom"
import { auth } from '../Components/firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const signIn = e => {
         e.preventDefault();

         auth 
         .signInWithEmailAndPassword(email, password)
         .then(auth =>{
             history.push('/')
         })
         .catch(error => alert(error.message));

     }

     const register = e => { 
         e.preventDefault();
          
         auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>{

                //it successfylly created a new user with 
                //email and password
                if (auth) {
                    history.push('/')
                }
            })

            .catch(error => alert(error.message));

          

    }


    return (
        <div className='login'>
            <Link to='/'>
            <img
                    className="login__logo"
                    src="https://utdmercury.com/wp-content/uploads/2017/10/amazon-logo.png"
                    alt="" 
            />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

            <form>
                <h5>E-Mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree tothe  AMAZONE FAKE
                Conditions of Use & Sale. Please
                see our Privacy Notice, Our Cookies Notice
                and our Interest-Based Ads
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazone Account</button>
            </div>
        
        </div>
    )
}

export default Login
