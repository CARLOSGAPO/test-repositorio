import React from 'react';
import './App.css';
import CountryList from './country-list';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const initialState = {
  countryList: []
}

function reducer(state, action) {
  console.log(action)
  switch
  (action.type) {
    case 'SET_COUNTRY_LIST': {
      console.log('voy a actualizar la lista')
      return { ...state, countryList: action.payload }
    }
    default: {
      return state
    }
  }



}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <CountryList />
      </div>
    </Provider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 7ebce7ff171b85d45504df3d27719f1b369a48a1
