import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { myContext } from '../context/Mycontext'
import { Sidebar } from '../pages/Sidebar';


export const Orders = () => {

  const { order, setOrder } = useContext(myContext);

  const [allOrders, setAllOrders] = useState([]);
  const [edit, setEdit] = useState('');
  const [test, setTest] = useState(''); //almacena el estado para el modal
  

  useEffect(() => {
    axios.get('http://localhost:8000/api/allorders')
      .then(res => {
        setAllOrders(res.data)
      })
  }, [])

  const onDispatchHandler = (oldOrder) => {

    axios.put(`http://localhost:8000/api/order/status/${oldOrder}/dispatch`)
    .then(res => {console.log(res)})


    // axios.delete('http://localhost:8000/api/order/' + oldOrder)
    //   .then(res => {
    //     setAllOrders(allOrders.filter(order => order._id !== oldOrder))
    //   })
  }

  const handlerEdit = (validId) => {
    console.log(validId)
    setTest(validId);
  }

  const handleUpdate = (data) =>{
    // e.preventDefault();
    axios.put('http://localhost:8000/api/order/'+ data,{
      edit
    })
  }




  return (
    <>
    <Sidebar/>

    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
    <h1>Histórico</h1>
      </div>
      <div className='row'>
        {

          allOrders.length > 0 && allOrders.map((item, index) =>

            <div key={index} className='col-lg-3 mt-5'>
              <div className="col-sm card text-dark bg-light mb-3" style={{ width: '18rem' }}>
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <h1 className='card-header bg-secondary text-center'>{item.desk} - {item.status}</h1>
                <div className="card-body">
                  <p className="card-text">Pedido:</p>
                  
                  <ul>
                    {item.order.map((item, index) =>
                      <li key={index}>{item.dish} x {item.counter}</li>
                    )}
                  </ul>
                  <p>{item.comment}</p>
                  <p><strong>Creación del pedido: </strong>{item.createdAt}</p>


                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Mesa: {test.desk}</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <h5>Editar orden:</h5>
                          <ul>
                            {test.order?.map((item, index) =>
                              <li key={index} className='row'>{item.dish} 
                                <input onChange = {(e)=> {setEdit(e.target.value)}}  value={item.counter}  type="number" className="form-control w-25 ms-1" />                             
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="modal-footer">
                          <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button onClick = {(e)=>{handleUpdate(test._id)}} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='text-center'>
                    {/* <button onClick={(e) => { handlerEdit(item.id) }} className="btn btn-warning m-1">Editar Orden</button> */}
                    {/* <button onClick={() => {handlerEdit(item)}} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Editar Orden
                    </button>
                    <button onClick={() => { onDispatchHandler(item._id) }} className="btn btn-danger">Despachar</button> */}
                  </div>
                </div>
              </div>
            </div>


          )}
      </div>



    </div>

    </>

  )
}
