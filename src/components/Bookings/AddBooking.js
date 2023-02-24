import frameLogo from '../../assets/images/icons/Frame.svg';
import vectorOneLogo from '../../assets/images/icons/Vector (1).svg';
import vectorThreeLogo from '../../assets/images/icons/Vector (3).svg';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/booking/actions';

export default function AddBooking() {
    const dispatch = useDispatch();

    //submit form data handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const booking = {}
        for (let [key, value] of (formData.entries())) {
            booking[key] = value;
            event.target[key].value = '';
        }
        dispatch(add(booking));
    }

    return (
        // <!-- Input Data -->
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
                    {/* <!-- From --> */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={frameLogo} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Saidpur">Saidpur</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- To --> */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={frameLogo} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                                <option value="" hidden>Please Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Saidpur">Saidpur</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Date --> */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                    </div>

                    {/* <!-- Guests --> */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={vectorOneLogo} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- className --> */}
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src={vectorThreeLogo} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                                <option value="" hidden>Please Select</option>
                                <option value="Business" >Business</option>
                                <option value="Economy">Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
