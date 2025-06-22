import { Cabecalho } from '../componentes/Cabecalho';
import estilos from './Inicial.module.css';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const neurotransmissores = [
    { nome: 'Serotonina', texto: 'A serotonina é frequentemente chamada de "hormônio da felicidade", pois regula o humor, o sono e o apetite. Níveis equilibrados estão associados a sentimentos de bem-estar e calma.' },
    { nome: 'Dopamina', texto: 'Conhecida como o neurotransmissor do prazer e da recompensa, a dopamina é liberada durante atividades agradáveis e motiva a repetição desses comportamentos.' },
    { nome: 'Noradrenalina', texto: 'Atua no estado de alerta e na resposta de "luta ou fuga". A noradrenalina aumenta a frequência cardíaca e o foco em situações de estresse ou excitação.' },
    { nome: 'GABA', texto: 'O GABA (ácido gama-aminobutírico) é o principal neurotransmissor inibitório do cérebro, ajudando a reduzir a ansiedade e a promover o relaxamento.' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
];

const emocoes = [
    { nome: 'Alegria', texto: 'Uma emoção positiva que surge de momentos de satisfação, contentamento e prazer. É impulsionada principalmente pela dopamina e serotonina.' },
    { nome: 'Medo', texto: 'Uma resposta natural a perigos percebidos, preparando o corpo para reagir. A amígdala e a noradrenalina são centrais nessa emoção.' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
    { nome: 'Em Desenvolvimento', texto: 'Em desenvolvimento...' },
]

export function Inicial() {
    const neuroRef = useRef<HTMLDivElement>(null);
    const emocoesRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = 300;
            if (direction === 'left') {
                ref.current.scrollLeft -= scrollAmount;
            } else {
                ref.current.scrollLeft += scrollAmount;
            }
        }
    };

    const handleClick = (item: { nome: string, texto: string }) => {
        navigate('/detalhe', { state: { titulo: item.nome, texto: item.texto } });
    };

    return (
        <div className={estilos.gridConteiner}>
            <Cabecalho />
            <main>
                {/*Banner */}
                <div className={estilos.banner}>
                </div>

                {/*Neurotransmissores */}
                <section className={estilos.secao}>
                    <h2 className={estilos.tituloSecao}>Neurotransmissores</h2>
                    <div className={estilos.carouselWrapper}>
                        <button 
                            className={`${estilos.arrow} ${estilos.arrowLeft}`}
                            onClick={() => handleScroll(neuroRef, 'left')}
                        >
                            <FiChevronLeft size={40} />
                        </button>
                        <div className={estilos.neuroContainer} ref={neuroRef}>
                            {neurotransmissores.map((item, index) => (
                                <div key={index} className={estilos.neuroItem} onClick={() => handleClick(item)}>
                                    <div className={estilos.circulo}></div>
                                    <p>{item.nome}</p>
                                </div>
                            ))}
                        </div>
                        <button 
                            className={`${estilos.arrow} ${estilos.arrowRight}`}
                            onClick={() => handleScroll(neuroRef, 'right')}
                        >
                            <FiChevronRight size={40} />
                        </button>
                    </div>
                </section>

                {/*Emoções */}
                <section className={estilos.secao}>
                    <h2 className={estilos.tituloSecao}>Emoções</h2>
                    <div className={estilos.carouselWrapper}>
                        <button 
                            className={`${estilos.arrow} ${estilos.arrowLeft}`}
                            onClick={() => handleScroll(emocoesRef, 'left')}
                        >
                            <FiChevronLeft size={40} />
                        </button>
                        <div className={estilos.emocoesContainer} ref={emocoesRef}>
                            {emocoes.map((item, index) => (
                                <div key={index} className={estilos.emocaoCard} onClick={() => handleClick(item)}>
                                    <div className={estilos.emocaoParteSuperior}>
                                    </div>
                                    <div className={estilos.emocaoParteInferior}>
                                        <p>{item.nome}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button 
                            className={`${estilos.arrow} ${estilos.arrowRight}`}
                            onClick={() => handleScroll(emocoesRef, 'right')}
                        >
                            <FiChevronRight size={40} />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
