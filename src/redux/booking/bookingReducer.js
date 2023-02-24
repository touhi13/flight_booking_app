import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

//define initial state
const initialState = {
    booking: []
};

//reducer
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                booking: [...state.booking, { ...action.payload, id: state.booking.length + 1 }]
            };

        case REMOVE_BOOKING:
            return {
                ...state,
                booking: [
                    ...state.booking.filter((book) => book.id !== action.payload),
                ],
            };

        default:
            return state;
    }
};

export default bookingReducer;