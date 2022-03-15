import React from 'react'
import { Navbar } from '../layout/Navbar'
import { Link } from 'react-router-dom'
import { Chart } from '../layout/Chart'
import { Displayer } from '../layout/Displayer'
import { Orders } from '../layout/Orders'
import useAuth from '../context/UseAuth'

export const Sidebar = () => {
    const { token } = useAuth();

    console.log(token?.permissions)
    return (
        <div className='bodyMenuChart'>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" to='/'>
                                        <i className="fa-solid fa-house m-1"></i>
                                        Home
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to='/chart'>
                                        <i className="fa-solid fa-book-open m-1"></i>
                                        Menú
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/dispatch'>
                                        <i className="fa-solid fa-table-list m-1"></i>
                                        Ordenes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/orders'>
                                        <i className="fa-solid fa-bell-concierge m-1"></i>
                                        Historico
                                    </Link>
                                </li>
                                {token?.permissions === 'admin' &&
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/signin'>
                                            <i className="fa-solid fa-utensils m-1"></i>
                                            Admin
                                        </Link>
                                    </li>
                                }



                            </ul>

                        </div>
                    </nav>


                </div>
            </div>
        </div >


    )
}
