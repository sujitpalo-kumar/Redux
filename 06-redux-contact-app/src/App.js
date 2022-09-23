import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import ContactApp from './components/ContactApp';





let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Redux - PizzaHut</a>
            </nav>

           <Provider store={store}>
                <ContactApp/>
           </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
