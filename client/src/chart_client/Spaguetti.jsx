import React, { useContext, useState } from 'react'
import { myContext } from '../context/Mycontext';
import { Modalfood } from './Modalfood'

export const Spaguetti = () => {

    const {order, setOrder} = useContext(myContext);

    const handleOnClick = (imgtxt, price,counter) => {
        if(counter > 0){
            setOrder([...order,{dish: imgtxt,
                price: price,
                counter: counter}])
        }
        else{
            alert('Ingresar cantidad diferente de cero');
        }       
    
    }

    const spaguetti = [
        {
            lfolder:'images/alfredo.jpeg',
            imgtxt:'Espagueti alfredo',
            description:'Salsa blanca con jamón, champiñones, tomate, albahaca, 2 rodajas de pan de ajo.',
            price:"7.50"
        },
        {
            lfolder:'images/bolonesa.jpeg',
            imgtxt:'Espagueti boloñesa',
            description:'Salsa napolitana, carne molida de res, tomate, albahaca y 2 rodajas de pan de ajo.',
            price:"7.50"
        },
        {
            lfolder:'images/carbonara.jpeg',
            imgtxt:'Espagueti carbonara',
            description:'Salsa blanca con tocino, tomate, albahaca, 2 rodajas de pan de ajo.',
            price:"7.50"
        },
        {
            lfolder:'images/vegetariano.jpeg',
            imgtxt:'Espagueti vegetariano',
            description:'Salsa blanca con aceitunas, champiñones, cebolla blanca, tomate, pimiento y 2 rodajas de pan de ajo.',
            price:"7.50"
        }

    ]

    return (


        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Espagueti
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body text-center">

                    {
                        spaguetti.map( (item,index) => <Modalfood
                        key={index}
                        lfolder={item.lfolder}
                        imgtxt={item.imgtxt}
                        description={item.description}
                        price={item.price}
                        handleOnClick={handleOnClick} />

                        )
                    }
                   

                </div>
            </div>
        </div>
    )
}
