import { 
    ALTER_MIN_NUMBER,
    ALTER_MAX_NUMBER 
} from '../actions/actionTypes'

const stateInitial = {
    min: 0,
    max: 0,
}

export default function(state = stateInitial, action) {
    switch(action.type) {
        case ALTER_MIN_NUMBER:
            return {
                ...state,
                min: action.payload
            }

        case ALTER_MAX_NUMBER:
            return {
                ...state,
                max: action.payload
            }

        default:
            return state
    }
}