import React from 'react';
import './Home.css';
import Intervalo from '../components/Intervalo/index';
import Media from '../components/Media/Media';
import Soma from '../components/Soma/Soma';
import Sorteio from '../components/Sorteio/Sorteio';

export default function Home() {
    return (
        <>
            <header id="header-home">
                <h1>Redux Learn</h1>
            </header>

            <main>
                <section className="row">
                    <Intervalo title={'Intervalo de Números'} color="Orange"/>
                </section>

                <section className="row">
                    <Media title={'Média dos Números'} color="Blue"/>
                    <Soma title={'Soma dos Números'} color="Purple"/>
                    <Sorteio title={'Sorteio de um Número'} color="Green"/>
                </section>
            </main>
        </>
    )
}