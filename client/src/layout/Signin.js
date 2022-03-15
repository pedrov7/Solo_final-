import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Signin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user', {
      user,
      password,
      role
    })
      .then(res => {
        e.target.reset();
        // console.log(res)
      })
      .catch(err => {
        // console.log(err)
      })

  }

  return (

    <div className='w-100'>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">

        <div className="row align-items-center g-lg-5 py-5">

          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3 d-inline me-4">hurryApp</h1>
            <img className="mb-4" src={require('../layout/favicon.ico')} alt="logo pic" />
            <p className="col-lg-10 fs-4">Always improving</p>
          </div>

          <div className="col-md-10 mx-auto col-lg-5 ">

            <div className='text-center mt-5'>
              <h6>Ingrese la información para el nuevo registro</h6>
            </div>
            <form onSubmit={handleOnSubmit} className="p-4 p-md-5 border rounded-3 bg-light mt-5">

              <div className="form-floating mb-3">
                <input onChange={(e) => { setUser(e.target.value) }} type="text" className="form-control" id="floatingName" placeholder="Name" />
                <label htmlFor="floatingInput">Usuario</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="floatingLastName" placeholder="LastName" />
                <label htmlFor="floatingInput">Contraseña</label>
              </div>

              {/* <div className="form-floating mb-3">
              <input type="date" className="form-control" id="floatingDate" placeholder="date" />
              <label htmlFor="floatingPassword">Birth Date</label>
            </div> */}

              {/* <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" placeholder="email" />
              <label htmlFor="floatingInput">Email address</label>
            </div> */}

              <div class="input-group mb-3">
                <button type="button" class="btn btn-outline-secondary" disabled>Seleccione un Rol</button>
                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  {/* <span class="visually-hidden">Toggle Dropdown</span> */}
                </button>
                <ul class="dropdown-menu">
                  <li><a onClick={()=>{setRole('waiter')}} class="dropdown-item">Waiter</a></li>
                  <li><a onClick={()=>{setRole('chef')}} class="dropdown-item">Chef</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a onClick={()=>{setRole('admin')}} class="dropdown-item text-primary">Admin</a></li>
                </ul>
                <input type="text" className="form-control text-center" value = {role} aria-label="Text input with segmented dropdown button"></input>
               
              </div>

              {/* <div className="form-floating mb-3">
                <input onChange={(e) => { setRole(e.target.value) }} type="text" className="form-control" id="floatingPassword" placeholder="Rol" />
                <label htmlFor="floatingPassword">Rol</label>
              </div> */}

              {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="older" /> Are you over +18?
              </label>
            </div> */}

              <button className="w-100 btn btn-lg btn-primary" type="submit">Registrar</button>

              <div className='text-center'>
                <Link className="m-3 btn btn-lg btn-link text-black btn-sm" to="/chart">Regresar</Link>
              </div>

              <hr className="my-4" />
              {/* <small className="text-muted">Ingrese la información para el nuevo registro.</small> */}
            </form>
          </div>
        </div>
      </div>

    </div>



  )
}
