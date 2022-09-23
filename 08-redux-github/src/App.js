import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import GithubSearchApp from "./components/GithubSearchApp";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks with Github Profile Search</a>
            </nav>

            <Provider store={store}>
                <GithubSearchApp/>
            </Provider>

        </React.Fragment>
    );
};
export default App;
