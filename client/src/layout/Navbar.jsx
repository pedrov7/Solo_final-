import React from 'react'
import { Link } from 'react-router-dom'
import { Orders } from './Orders'
import useAuth from '../context/UseAuth'

export const Navbar = () => {

    const {logout} = useAuth();
    

    return (


        <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
                <img src={require('./logo.png')} alt="logo"/> hungryApp
            </Link>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <input className="form-control form-control-dark w-100" type="text" placeholder="" aria-label="Search" /> */}
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a onClick={logout} className="nav-link px-3" href="/">Sign out</a>
                </div>
            </div>
        </div>

    )
}
