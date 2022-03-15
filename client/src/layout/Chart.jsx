import React, { useContext, useState } from 'react'
import { Beverages } from '../chart_compo/Beverages'
import { Coments } from '../chart_compo/Coments'
import { Entries } from '../chart_compo/Entries'
import { Lasagna } from '../chart_compo/Lasagna'
import { Salads } from '../chart_compo/Salads'
import { Spaguetti } from '../chart_compo/Spaguetti'
import { myContext } from '../context/Mycontext'
import axios from 'axios'
import { Sidebar } from '../pages/Sidebar'


export const Chart = () => {

  const { order, setOrder, desk, setDesk } = useContext(myContext);
  const [comment, setComment] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault();
    if (desk > 0) {
      axios.post('http://localhost:8000/api/order', {
        order,
        desk,
        comment,
        status : 'en espera'
      })
        .then(res => {
          e.target.reset();
          setDesk("");
          setComment("");
          console.log('killer')
        })
        .catch(err => {
          console.log(err);
        })
    }
    else alert('Ingrese un número de mesa');
  }


  return (
    <>
    <Sidebar/>
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>Menu</h1>
      </div>

      <form onSubmit={handleConfirm} className="input-group my-5">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className=''>
            <Salads />
            <Entries />
            <Spaguetti />
            <Lasagna />
            <Beverages />
            <Coments />
          </div>


          


        </div>
        
        <div className='container input-group my-3 w-100 text-center'>
          <span className="input-group-text">Comentarios</span>
          <textarea onChange={(e) => { setComment(e.target.value) }} className="container form-control" rows="5" aria-label="with textarea" ></textarea>
          <div className='row'>
            <p><strong>Número de mesa</strong></p>
            <div className='input-group input-group-lg w-50 ms-5'>
              <input onChange={(e) => { setDesk(e.target.value) }} type="number" className="form-control " placeholder="Mesa #" min="1" max="10" aria-label="Username"/>
            </div>
            <button type="submit" className="form-control btn btn-danger w-25 m-3">Confirmar Orden</button>
          </div>
        </div>
      </form  >
    </div>
    </>
  )
}
