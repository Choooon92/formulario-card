import React, { useState } from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const FormularioPago = () =>{

  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: ''
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const handleFocus = (e) => {
    setState({
      ...state,
      focus : e.target.name
    })
  }

  const processPayment = (e) => {
    console.log("number =>", state.number)
    console.log("name =>", state.name)
    console.log("expiry =>", state.expiry)
    console.log("cvc =>", state.cvc)
    console.log(JSON.stringify(state))
  }




  return(
    <div className="card">
      <div className="card-body">

        <Cards 
        number={state.number}
        name={state.name}
        expiry={state.expiry}
        cvc={state.cvc}
        focused={state.focus}
        />

        <form>
          
          <div className="form-group">
            <label htmlFor="number">Numero de la tarjeta *</label>
            <input 
              type="text"
              name="number"
              id="number"
              maxLength="16"
              required
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Nombre *</label>
            <input 
              type="text"
              name="name"
              id="name"
              maxLength="30"
              required
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="expiry">Fecha de vencimiento *</label>
              <input 
                type="text"
                name="expiry"
                id="expiry"
                maxLength="4"
                required
                className="form-control"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
            </div> 
            <div className="form-group col-md-6">
              <label htmlFor="cvc">CVC *</label>
              <input 
                type="text"
                name="cvc"
                id="cvc"
                maxLength="4"
                required
                className="form-control"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
            </div>
          </div>

          <button onClick={processPayment} type="button" className="btn btn-success btn-block btn-lg">Pagar</button>

        </form>


      </div>
    </div>
  )
}

export default FormularioPago;