import React from 'react'
import { Link } from 'react-router-dom'
import { Beverages } from '../chart_client/Beverages'
import { Coments } from '../chart_client/Coments'
import { Entries } from '../chart_client/Entries'
import { Lasagna } from '../chart_client/Lasagna'
import { Salads } from '../chart_client/Salads'
import { Spaguetti } from '../chart_client/Spaguetti'

export const Menuclient = () => {

    return (

        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <Link className='' to='/'>
          <h1><i class="fa-solid fa-circle-left me-5" ></i>Menu</h1>
          </Link>
          </div>
    
          <form className="input-group my-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className=''>
                <Salads />
                <Entries />
                <Spaguetti />
                <Lasagna />
                <Beverages />
            
              </div>
            </div>
    
           
          </form  >
        </div>
      )
    }


