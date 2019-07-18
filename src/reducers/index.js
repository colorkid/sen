import { combineReducers } from 'redux';
import Fields from './fields';

const allReducers = combineReducers({
	fields: Fields
});

export default allReducers;