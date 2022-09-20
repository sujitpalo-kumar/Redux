import {BUY_PIZZA} from "./pizzaActionTypes";

const buyPizza = () => {
    return {
        type : BUY_PIZZA,
        payload : 'Purchase a Pizza'
    }
};
export {buyPizza};
