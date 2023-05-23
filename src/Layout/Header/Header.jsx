import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContenxt } from '../../Provider/AuthProvider';

const Header = () => {
    const { profile, logOutUser } = useContext(AuthContenxt)
    // console.log(profile)
    const handleLogOut = () => {
        logOutUser()
            .then(res => { })
            .catch(err => { })
    }
    return (
        <div className='web-header'>
            <Container>
                <div className='main-header d-flex align-items-center justify-content-between'>
                    <div className=''>
                        <img className='logo' src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png" alt="logo" />
                    </div>
                    <div className="header-menu d-flex align-items-center">
                        <Link to="/">Home</Link>
                        <Link to="/alltoys">All Toys</Link>
                        {profile ?
                            <div>
                                <Link to="/mytoys">My Toys</Link>
                                <Link to="/addtoys">Add A Toy</Link>
                            </div>
                            :
                            ""
                        }
                        <Link to="/blog">Blogs</Link>
                    </div>
                    <div className="user">
                        {profile ?
                            <div className='d-flex align-items-center gap-2'>
                                <img className='user-profile' src={profile.photoURL} alt="" />
                                <Link className='header-btn' onClick={handleLogOut}>Log Out</Link>
                            </div>
                            :
                            <Link className='header-btn' to="/login">Login</Link>
                        }
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Header;