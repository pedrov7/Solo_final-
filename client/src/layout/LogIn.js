import React, {useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import useAuth from '../context/UseAuth'


export const LogIn = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation;


    const handleOnSubmit = (e) =>{
        e.preventDefault();
        login(user,password).then(()=>{
            // console.log('entro al then')
            navigate(state?.path || '/chart')
            // navigate(state?.path)
            
        }).catch(e =>{
            // console.log('entro al catch')
            alert('Error al autenticar')
            navigate('/')
        })
    }

    return (


            <div className="containerLogIn text-center bg-dark vh-100">

                <div className="form-signin">
                    <form onSubmit={e => handleOnSubmit(e)}>
                        <img className="mb-4" src={require('../layout/hungryApp.png')} alt="logo pic"/>
                        <img className="mb-4" src={require('../layout/favicon.ico')} alt="logo pic"/>
                        {/* <h5 className="h3 mb-3 fw-normal text-white">Ingrese sus credenciales...</h5> */}
                        <p className="mt-5 mb-3 text-muted">Ingrese sus credenciales...</p>

                        <div className="form-floating">
                            <input onChange = {(e) => {setUser(e.target.value)}} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Usuario</label>
                        </div>
                        <div className="form-floating">
                            <input onChange = {(e) => {setPassword(e.target.value)}} type="password" className="form-control mt-2" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                {/* <input type="checkbox" value="remember-me" /> Remember me */}
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                        <Link className="m-3 btn btn-lg btn-link btn-sm text-white" to="/">Retornar al Inicio</Link>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>

                    </form>
                </div>
            </div>
        


    )
}
