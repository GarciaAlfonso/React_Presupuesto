import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({guardarGasto,setCrearGasto}) => {

    //state para el nombre del gasto
    const [nombre, setNombre] = useState('');

    //state para el monto del gasto
    const [monto, setMonto] = useState(0);

    const [error, setError] = useState(false);

    const guardarNombre = (e) => {
        setNombre(e.target.value);
        
    }

    const guardarCantidad = (e) => {
        setMonto(parseInt(e.target.value));
        
    }


    //Agregar gasto al hacer click en el boton

    const agregarGasto = (e) => {
        e.preventDefault();

        //Validar el Formulario

        if(nombre.trim() === '' || monto < 1 || isNaN(monto)) {
            setError(true);
            return;
        }

        setError(false);//Quitar el Error

        //Construir el gasto

        const gasto = {
            nombre,//al tener llaves y valor del mismo nombre
            monto, // se coloca solo el nombre y se asigna
            id: shortid.generate()
        }

        //pasar el gasto al componente principal

        guardarGasto(gasto);

        //poner el primer gasto en la lista

        setCrearGasto(true);

        //resetear el Formulario

        setNombre('');
        setMonto('');
    }

    return (
        <form 
            onSubmit = {agregarGasto}
        >
            <h2>Agrega tus Gastos Aquí</h2>

            {error ? <Error mensaje='Ambos campos son Obligatorios - Nombre y monto valido'/> : null}

            <div className="campo">
                <label>Nombre del Gasto</label>

                <input
                    type="text"
                    className="u-full-width"
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={guardarNombre}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder='Ej. 500'
                    value = {monto}
                    onChange={guardarCantidad}
                    
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;