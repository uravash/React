import { createStore } from 'redux'
import thinglistReducer from './Reducer/index'

const store = createStore(thinglistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;