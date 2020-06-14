import React from 'react';
import { connect } from 'react-redux';

const Soma = props => {
    const { min,max } = props;

    return (
        <section className={`card ${props.color}`}>
            <header>
                <h1>{props.title}</h1>
            </header>

            <main>
                <h1>Resultado: <span>{max + min}</span></h1>
            </main>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma);