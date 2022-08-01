import { useNavigate, useLocation } from 'react-router-dom';
import  queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse( location.search);

  const heroes = getHeroesByName(q); 

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Buscador</h1>
      <hr />

      <div className="row">
        <div className="col-xl-5 col-md-4">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={ onSearchSubmit } aria-label="form">
            <input 
              type="text" 
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-xl-7 col-md-8">
          <h4>Resultados</h4>
          <hr />



          <div className="alert alert-primary animate__animated animate__fadeIn"   style={ {display: showSearch ? '' : 'none'} }>Buscar un heroe</div>

          <div className="alert alert-danger animate__animated animate__fadeIn" aria-label="divWarning" style={ {display: showError ? '' : 'none' } }>No existen heroes con { q }</div>

          {
            heroes.map( heroe => <HeroCard key={ heroe.id } {...heroe} />)
          }
        </div>
      </div>
    </>
  )
}
