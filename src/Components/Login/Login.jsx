import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import Header from '../../Layout/Header/Header';
import { AuthContenxt } from '../../Provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signInUser} = useContext(AuthContenxt)
    // console.log(signInUser)
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;
        form.reset()
        signInUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => {
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }
    return (
        <div>
            <Header></Header>
            <Container>

        <ToastContainer />
            <div className="login-form">
                <h5>Sign In</h5>
                <form onSubmit={handleSignIn} action="">
                    <input type="email" name="email" placeholder='Email' required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <Link>Forgot password?</Link>
                    <input type="submit" value="Sign In" className='login-btn' />
                </form>
                <div className="google-signin text-center pt-4">
                    <h6>Or</h6>
                    <Button className=''><FaGoogle/> Sign In With Google</Button>
                </div>
                <div className="login-footer">
                <span>Don't have an account?</span>
                <Link to="/register">SIGN UP NOW</Link>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Login;