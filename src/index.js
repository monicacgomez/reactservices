import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponentServiceSuppliers from './components/ComponentServiceSuppliers';
import EmpleadosDepartamentos from './components/EmpleadosDepartamentos';
import EmpleadosDepartamentos2 from './components/EmpleadosDepartamentos2';
import EmpleadosOficios from './components/EmpleadosOficios';
import DepartamentosComponent from './components/maestrodetalle/DepartamentosComponent';
import CochesComponent from './components/maestrodetalle/CochesComponent';
import MenuComponent from './components/MenuComponent';
import Router from './components/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div style={{margin: "auto", width: "50%"}}>
        <Router/>
    </div>
);

reportWebVitals();