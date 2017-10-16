import {FETCH_WEATHER} from '../actions/fetchweather';

export default function(state=[],action){
    switch(action.tyoe){
        case FETCH_WEATHER:
            return [...state,action.payload.data];
    }
    return state;
}