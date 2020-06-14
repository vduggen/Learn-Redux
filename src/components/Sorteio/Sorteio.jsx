import React from 'react';
import { connect } from 'react-redux';

const Sorteio = props => {
    const { min,max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <section className={`card ${props.color}`}>
            <header>
                <h1>{props.title}</h1>
            </header>

            <main>
                <h1>Resultado: <span>{aleatorio}</span></h1>
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

export default connect(mapStateToProps)(Sorteio);