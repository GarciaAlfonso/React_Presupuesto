import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';


const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {

    //Definir el state 

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value))
    }

    //Submit para definir el presupuesto

    const agregarPresupuesto = (e) => {
        e.preventDefault();
        
        //Validar Formulario
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }

        setError(false); //Quitar el Error

        setPresupuesto(cantidad);

        setRestante(cantidad);

        setMostrarpregunta(false);
        
    }
    

    return (
        <Fragment>

            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje='Presupuesto Incorrecto'/> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Indica tu presupuesto $"
                    onChange={definirPresupuesto}//evento que lee lo que se escribe en el input 'e'
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarpregunta: PropTypes.func.isRequired

}

export default Pregunta;