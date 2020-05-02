import React, {useState, useEffect} from 'react';
import './index.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  //Definir el state presupuesto

  const [presupuesto, setPresupuesto] = useState(0); 

  //Definir State para el restante

  const [restante, setRestante] = useState(0);

  //State para la Carga condicional de los componentes

  const [mostrarpregunta, setMostrarpregunta] = useState(true);

  //State listado de gastos

  const [gastos, setGastos] = useState([]);

  const [gasto, guardarGasto] = useState({});

  const [creargasto, setCrearGasto] = useState(false);

  //useEffect que actualiza el restante

  useEffect(() => {
    if(creargasto){

      //Agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])
    }

    //Resta del presupuesto actual

    const presupuestoRestante = restante - gasto.monto;

    setRestante(presupuestoRestante);
    
    //Resetea el false del presupuesto
    setCrearGasto(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gasto])




  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          
          {mostrarpregunta ?(
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarpregunta={setMostrarpregunta}
            />
          ) 
          :
           ( 
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />

              </div>
            </div>
            )
          }

        </div>
      </header>

    </div>
  );
}

export default App;
