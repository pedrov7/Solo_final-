import React, {useContext } from 'react'
import { myContext } from '../context/Mycontext';
import { Modalfood } from './Modalfood'

export const Lasagna = () => {

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

    const lasagna = [
        {
            lfolder: 'images/lcarne.jpeg',
            imgtxt: 'Lasaña de carne ',
            description: 'Carne molida en salsa bechamel, mozzarella, terminado con salsa napolitana y parmesano, con 3 rodajas de pan de ajo.',
            price: '9.15'
        },
        {
            lfolder:'images/lpollo.jpeg',
            imgtxt:'Lasaña pollo',
            description:'Pollo desmechado en salsa bechamel, mozzarella , terminado con salsa napolitana y parmesano, con 3 rodajas de pan de ajo.',
            price:'10.15'
        },
        {   
            lfolder:'images/lpolloto.jpeg',
            imgtxt:'Lasaña pollo, tocino',
            description:'Lechuga crespa picada, pechuga de pollo desmechado, champiñones, maíz dulce, queso fresco.',
            price:'9.15'
        },
        {   
            lfolder:'images/lvegetariana.jpeg',
            imgtxt:'Lasaña vegetariana',
            description:'Aceitunas, champiñones, cebolla blanca, pimiento en salsa bechamel, mozzarella , terminado con salsa napolitana y parmesano.',
            price:'9.00'

        }
    ];

    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingLasagna">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseLasagna" aria-expanded="true" aria-controls="panelsStayOpen-collapseLasagna">
                    Lasaña
                </button>
            </h2>
            <div id="panelsStayOpen-collapseLasagna" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingLasagna">
                <div className="accordion-body text-center">


                    {lasagna.map((item, index) =>  <Modalfood
                            key={index}
                            lfolder={item.lfolder}
                            imgtxt={item.imgtxt}
                            description={item.description}
                            price={item.price}
                            handleOnClick={handleOnClick} />
                            )}

                </div>
            </div>
        </div>

    )
}
