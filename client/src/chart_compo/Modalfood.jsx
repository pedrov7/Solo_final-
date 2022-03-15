import React, { useState } from 'react'


export const Modalfood = ({ lfolder, imgtxt, description, price, handleOnClick }) => {

   const [counter, setCounter] = useState('');


    return (
        <div className='d-inline-block m-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={require(`../${lfolder}`)} className="card-img-top" alt={imgtxt} />
                <div className="card-body">
                    <h5 className="card-title">{imgtxt}</h5>
                    <p className="card-text" style={{ minHeight: "6rem" }}>{description}</p>
                    <p className="card-text"><strong>${price}</strong></p>
                    <input onChange={(e)=>{setCounter(e.target.value)}} type="number" className="form-control w-50 d-inline-block" min='0' placeholder='Cantidad' aria-label='Cantidad'/>
                    <div className='d-inline-block w-25'>
                    {/* <button onClick={() => { handleOnClick(imgtxt, price, counter) }} className="btn btn-warning btn-sm mx-4">Editar</button>  */}
                    <button onClick={() => { handleOnClick(imgtxt, price, counter) }} type='button' className="btn btn-primary btn-sm mx-4">Añadir</button> 
                    </div>       
                </div>
            </div>
        </div>
    )
}
