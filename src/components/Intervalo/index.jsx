import React from 'react';
import { connect } from 'react-redux';
import { alterNumberMin, alterNumberMax } from '../../store/actions/numeros';

const Intervalo = props => {
    const { min, max } = props;
    
    return (
        <section className={`card ${props.color}`}>
            <header>
                <h1>{props.title}</h1>
            </header>

            <main>
                <label htmlFor="min">Mínimo:</label>
                <input type="number" name="min" id="min" value={min} onChange={e => props.alterMin(+e.target.value)}/>

                <label htmlFor="max">Máximo:</label>
                <input type="number" name="max" id="max" value={max} onChange={e => props.alterMax(+e.target.value)}/>
            </main>
        </section>
    )
};

function mapStateToProps(store) {
    return {
        min: store.numeros.min,
        max: store.numeros.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterMin(newNumber) {
            const action = alterNumberMin(newNumber);
            dispatch(action);
        },

        alterMax(newNumber) {
            const action = alterNumberMax(newNumber);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo);