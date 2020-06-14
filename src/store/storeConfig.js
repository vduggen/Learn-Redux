import { createStore, combineReducers } from 'redux';   

const reducers = combineReducers({
    numeros: function(state, action) {
        switch(action.type) {
            case 'ALTER_MIN_NUMBER':
                return {
                    ...state,
                    min: action.payload
                }

            case 'ALTER_MAX_NUMBER':
                return {
                    ...state,
                    max: action.payload
                }

            default:
                return {
                    min: 0,
                    max: 0,
                }
        }
    },
    nomes: function(state, action) {
        return [
            'Ana',
            'José',
            'Vitor',
            'João'
        ]
    }
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;