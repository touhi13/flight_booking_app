import './assets/css/App.css';
import AddBooking from './components/Bookings/AddBooking';
import Bookings from './components/Bookings/Bookings';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';

function App() {
  return (
    //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
    <Provider store={store}>
      <Header />
      <section>
        <AddBooking />
        <Bookings />
      </section>
    </Provider>

  );
}

export default App;
