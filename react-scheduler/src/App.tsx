import React from 'react';
import './App.css';
import Appointments from "./main/Appointments"
import AppointmentsCreate from "./main/AppointmentsCreate"
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
              <Route path='/' exact component={Appointments} />
              <Route path='/create' exact component={AppointmentsCreate} />
            </BrowserRouter>
    </div>
  );
}

export default App;
