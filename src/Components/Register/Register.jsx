import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { AuthContenxt } from '../../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/config.firebase';

const Register = () => {
    const auth = getAuth(app)
    const {createUser, } = useContext(AuthContenxt)
    // console.log(createUser)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.email.value;
        const photo = form.photo.value;
        const result = {name, email, password, photo}
        // console.log(result)
        form.reset()
        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user)
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
            .then(res => {})
            .catch(err => {})
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
            <div className="login-form">
                <h5>Sign Up</h5>
                <form onSubmit={handleRegister} action="">
                    <input type="text" name="name" placeholder='Name' />
                    <input type="email" name="email" placeholder='Email' required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="text" name="photo" placeholder='Photo URL' />
                    <input type="submit" value="Sign Up" className='login-btn' />
                </form>
                <div className="login-footer">
                <span>Already have an account?</span>
                <Link to="/login">LOG IN NOW</Link>
                </div>
            </div>
        </Container>
        </div>
            
    );
};

export default Register;