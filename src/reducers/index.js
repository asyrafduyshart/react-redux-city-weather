import { combineReducers } from 'redux';
import WeatherList from './reducer_weather'

const rootReducer = combineReducers({
  weather : WeatherList
});

export default rootReducer;
