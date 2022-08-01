import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Se cambia BrowserRouter por HashRouter */}
    {/* Este tipo de enrutador usa la parte hash de la URL para mantener la interfaz de usuario sincronizada con la URL. */}
    {/* Este cambio se hizo especificamente para que funcione en github pages */}
    {/* <BrowserRouter> */}
    <HashRouter>
      <HeroesApp />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
