import { createStore } from 'redux';
import rootReducer from '../reducers/topics';

const store = createStore(rootReducer);

export default store;
