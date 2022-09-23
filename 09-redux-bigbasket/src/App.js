import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import ProductAdmin from "./components/products/ProductAdmin";
import ProductList from "./components/products/ProductList";
import UpdateProduct from "./components/products/UpdateProduct";
import CreateProduct from "./components/products/CreateProduct";
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
                       <Route  path='/products' element={<ProductList/>}/>
                       <Route  path='/admin' element={<ProductAdmin/>}/>
                       <Route  path='/create-product' element={<CreateProduct/>}/>
                       <Route  path='/update-product/:id' element={<UpdateProduct/>}/>
                   </Routes>
               </BrowserRouter>
           </Provider>
        </React.Fragment>
    );
};
export default App;
