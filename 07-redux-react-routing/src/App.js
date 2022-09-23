import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Employees from "./components/employees/Employees";
import Stocks from "./components/stocks/Stocks";
import StockDetails from "./components/stocks/StockDetails";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import {Provider} from "react-redux";
import {store} from "./redux/store";

let App = () => {

    return(
        <React.Fragment>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route  path="/" element={<Home/>}/>
                        <Route  path="/about" element={<About/>}/>
                        <Route  path="/employees" element={<Employees/>}/>
                        <Route  path="/employees/:id" element={<EmployeeDetails/>}/>
                        <Route  path="/stocks" element={<Stocks/>}/>
                        <Route  path="/stocks/:id" element={<StockDetails/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </React.Fragment>
    );
};
export default App;
