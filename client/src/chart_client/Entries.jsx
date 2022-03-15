import React, { useContext} from 'react'
import { myContext } from '../context/Mycontext';
import { Modalfood } from './Modalfood'


export const Entries = () => {

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

    const entries = [
        {
            lfolder:'images/panajo.jpeg',
            imgtxt:'Pan de ajo',
            description:'5 porciones de pan con mantequilla, ajo, jamón.',
            price:'3.50'
},
{
            lfolder:'images/nuggets.jpeg',
            imgtxt:'Nuggets',
            description:'6 nuggets de pechuga de pollo con papa frita.',
            price:'4.75'
},
{
            lfolder:'images/choripapa.jpeg',
            imgtxt:'Choripapa',
            description:'Papas fritas o criollas con chorizo picado.',
            price:'6.15'
        },
        {
            lfolder:'images/brocheta.jpeg',
            imgtxt:'Brochetas',
            description:'Empanadas, brochetas lomo de res, chorizo paisa con pimiento.',
            price:'6.15'
        }
    ]
    return (
        
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Entradas
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body text-center">
                    
                {entries.map((item,index) => <Modalfood
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
