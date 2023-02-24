import { REMOVE_BOOKING } from "../booking/actionTypes";

//middleware for checking data length
const dataLimit = (store) => (next) => (action) => {
    const { booking } = store.getState();
    const bookingBtn = document.getElementById("lws-addCity");

    if (booking.length <= 2 || action.type === REMOVE_BOOKING) {
        //if removed data and disable button become enable.
        if (bookingBtn.disabled === true) {
            bookingBtn.removeAttribute('disabled');
        }
        return next(action);
    } else {
        //disable button
        bookingBtn.disabled = true;
    }
};

export default dataLimit;