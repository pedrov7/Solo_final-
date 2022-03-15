import React, {useContext } from 'react'
import { Modalfood } from './Modalfood'
import { myContext } from '../context/Mycontext'

export const Salads = () => {

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

    // console.log(order);
    const salads = [
        {
            lfolder:'images/caprese.jpg',
            imgtxt:'Ensalada Caprese',
            description:'Lechuga, tomates cherry, mozzarella, parmesano, cebolla blanca, y rollitos de jamón.',
            price:'6.15'
        },
        {
            lfolder:'images/cesar.jpg',
            imgtxt:'Ensalada Cesar',
            description:'Champiñones, jamón, queso rallado, lechuga, tomate, pepinillo, pimiento y cebolla blanca.',
            price:'6.15'
        },
        {
            lfolder:'images/griega.jpg',
            imgtxt:'Ensalada Griega',
            description:'Lechuga crespa picada, pechuga de pollo desmechado, champiñones, maíz dulce, queso fresco.',
            price:'6.15'
        },
        {
            lfolder:'images/waldorf.jpg',
            imgtxt:'Ensalada Waldorf',
            description:'Suprema de pollo al horno, tomate cherry, lechuga, parmesano, y tostaditas de pan.',
            price:'6.15'
        }
    ]

    
    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Ensaladas
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body text-center">
                    
                {salads.map((item,index) => <Modalfood 
                        key = {index}
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
