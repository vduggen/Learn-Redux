import { 
    ALTER_MIN_NUMBER,
    ALTER_MAX_NUMBER 
} from './actionTypes'

export function alterNumberMin(newNumber) {
    return {
        type: ALTER_MIN_NUMBER,
        payload: newNumber
    }
}

export function alterNumberMax(newNumber) {
    return {
        type: ALTER_MAX_NUMBER,
        payload: newNumber
    }
}