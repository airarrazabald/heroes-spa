import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext);

  const navigate = useNavigate();

  const onLogin = ( userName ) => {

      const lastPath = localStorage.getItem('lastPath') || '/';

      login(userName);

      navigate(lastPath, {
          replace: true
      });
  }


  const [inputValue, setInputValue ] =   useState('')

  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(inputValue);

    if( inputValue.trim().length <= 5 ) return;

    onLogin(inputValue.trim());

    setInputValue('');
  }

  return (
    <div className="container mt-5 text-center col-xl-4 col-md-6 col-xs-12">
        <h1>Heroes SPA</h1>
        <hr />
        <form onSubmit={ onSubmit  }>
          <input 
            className="form-control"
            type="text"
            placeholder="Ingresa un nombre para identificarte"
            onChange={ onInputChange }
          />
          <button 
            className="btn btn-primary mt-2 form-control"
          >
            Login
          </button>
        </form>
        <div className="alert alert-info mt-2" role="alert">
          El nombre de usuario es solo para visualizar en el navbar de la app
        </div>
    </div>
  )
}
