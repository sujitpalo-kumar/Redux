import React, {useState} from "react";
import pizza from '../assets/img/card_1.jpg';
import {useDispatch, useSelector} from "react-redux";
import {buyPizza} from "../redux/pizzaHut/pizzaActions";

let PizzaHut = () => {
    let dispatch = useDispatch();
    // get data from the Redux store
    let pizzaState = useSelector((state) => {
        return state.pizza;
    });

    // dispatching an action from component to the store
    let clickBuyPizza = () => {
        dispatch(buyPizza());
    };


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-danger">PizzaHut</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus dignissimos dolores est facilis fuga, harum ipsam iusto laborum minus, nam odio porro, possimus quaerat qui recusandae reiciendis voluptates voluptatibus.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={pizza} alt="" className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-md-8">
                        <p className="h4">Available :
                            <span className="font-weight-bold text-danger">{pizzaState.count}</span>
                        </p>
                        <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Buy Pizza</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default PizzaHut;
