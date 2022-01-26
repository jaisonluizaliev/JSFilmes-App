import jsCookie from 'js-cookie';
import React, { useReducer, createContext } from 'react';

//Step 1 - Create Context
export const Store = createContext();

//optional Step - create initialState
const initialState = {
  
};

//step 2 - create reducer function
function reducer(state, action) {
  switch (action.type) {
    default:
      state;
  }
}

//step 3 - store provider
function StoreProvider({ children }) {
  //step 4 - create useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //step 5 - instance of values
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default StoreProvider;
