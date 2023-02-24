import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

//define action creators
export const add = (value) => {
    return {
        type: ADD_BOOKING,
        payload: value,
    };
};

export const remove = (value) => {
    return {
        type: REMOVE_BOOKING,
        payload: value,
    };
};