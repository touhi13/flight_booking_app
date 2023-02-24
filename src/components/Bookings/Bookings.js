import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/booking/actions';
import Booking from './Booking'

export default function Bookings() {
    const bookings = useSelector((state) => state.booking);
    const dispatch = useDispatch();

    //delete row handler
    const handelDelete = (id) => {
        dispatch(remove(id));
    };
    return (
        // < !--Preview Data-- >
        <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {
                        bookings &&
                        bookings.map(booking => (
                            <Booking
                                key={booking.id}
                                booking={booking}
                                handelDelete={handelDelete}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
