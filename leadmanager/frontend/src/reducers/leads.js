import { GET_LEADS } from '../actions/types.js';

const initializeState = {
    something: 'text',
    leads: []
}

export default function (state = initializeState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            };
        default:
            return state;
    }
}