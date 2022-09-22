
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { RoootNavigator } from './src/navigation';


export default function App() {
  return (
    <Provider store={store}>
       <RoootNavigator/>

    </Provider>
   
   

  );
}


