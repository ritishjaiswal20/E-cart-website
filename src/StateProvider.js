import React ,{createContext,useContext,useReducer} from 'react';

//prepares the data layer
export const StateContext=createContext();

//wrap our app and provider in the data layer
export const StateProvider=({reducer,initalState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initalState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue=()=>useContext(StateContext);