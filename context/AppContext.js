import React, { useReducer } from 'react';
import InitialState from './InitialState';
import Reducers from './reducres';

export const AppContext = React.createContext();


export default ({children}) => {

    const [data, dispatch] = useReducer(Reducers, InitialState);

    return (
        <AppContext.Provider value={{data, dispatch}}>
            { children }
        </AppContext.Provider>
    );
};