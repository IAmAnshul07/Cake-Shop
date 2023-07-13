import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './store/store';
import IceCreamContainer from './components/IceCreamContainer';

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
