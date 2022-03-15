import React from 'react'
import { Link } from 'react-router-dom'


export const Homepg = () => {
  return (

    <div className="d-flex  text-center text-white bg-dark vh-100">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="mb-auto">
          <div>
            <h3 className="float-md-start text-warning mb-0">hurryApp</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link active" to='login'>Ingresar</Link>
              <Link className="nav-link" to="client">Menú</Link>
              <Link className="nav-link" to="reservations">Reservas</Link>
              <Link className="nav-link" to="contact">Trabaja con Nosotros</Link>
            </nav>
          </div>
        </div>

        <div className="px-3">
          <h1>Ayuda a agilizar las ordenes de tu restaurante.</h1>
          <br/>
          <p className="lead">hurryApp es una aplicación que ayuda a levantar la eficiencia de la cocina de tu restaurante. No te quedes fuera, pruébala gratis por 30 días!.</p>
        
          <br/>
          <p className="lead">
            <Link className="btn btn-lg btn-secondary mx-3 fw-bold border-white bg-white" to="/login">Ingresar</Link>
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
