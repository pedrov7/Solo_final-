import React from 'react'
import { Link } from 'react-router-dom'

export const Reservation = () => {
  return (

    <div className="d-flex  text-center text-white bg-dark vh-100">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="mb-auto">
          <div>
            <h3 className="float-md-start text-warning mb-0">hurryApp</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
            
              
            </nav>
          </div>
        </div>

        <div className="px-3">
          <h1>Para reservas llamar <i class="fa-solid fa-phone ms-3"></i></h1>
          
          <br/>
          <p className="lead">+593 992 255 6677</p>
        
          <br/>
          <p className="lead">
            <Link className="btn btn-lg btn-secondary mx-3 fw-bold border-white bg-white" to="/">Retornar</Link>
            {/* <Link className="btn btn-lg btn-warning fw-bold" to="/signin">Sign Up!</Link> */}
          </p>
        </div>

        <div className="mt-auto text-white-50">
          <p>Developed with help <a href="/" className="text-white"></a>, by <a href="https://github.com/pedrov7" className="text-white">@Pedro_Valladares</a>.</p>
        </div>
      </div>



    </div>

  )
}
