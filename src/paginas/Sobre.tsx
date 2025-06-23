import estilos from './Sobre.module.css';
import { Cabecalho } from '../componentes/Cabecalho';
import { Dropdown } from '../componentes/Dropdown';
import { useState } from 'react';
import { FaCode, FaPencilRuler, FaSearch, FaClipboardCheck, FaArrowLeft, FaArrowRight, FaFileAlt } from 'react-icons/fa';


interface Ods {
    id: number;
    imagem: string;
    titulo: string;
    texto: string;
}

const odsData: Ods[] = [
    {
        id: 3,
        imagem: '/src/assets/ods3.svg',
        titulo: 'ODS 3: Saúde e Bem-Estar',
        texto: 'O projeto alinha-se à meta 3.4, que busca melhorar a saúde mental e o bem-estar por meio de estratégias de prevenção e promoção. O Neuro27 contribui com essa meta ao oferecer um recurso digital educativo que estimula o autoconhecimento emocional e fornece estratégias práticas para o fortalecimento da saúde mental cotidiana.'
    },
    {
        id: 4,
        imagem: '/src/assets/ods4.svg',
        titulo: 'ODS 4: Educação de Qualidade',
        texto: 'O projeto atende à meta 4.7, que visa garantir que todos adquiram conhecimentos e habilidades necessárias para promover o desenvolvimento sustentável, incluindo a valorização da saúde e bem-estar. O aplicativo facilita a compreensão de temas científicos complexos — como neurociência emocional e psicologia — de forma acessível e interativa, incentivando habilidades socioemocionais como empatia, autorregulação e consciência emocional.'
    },
    {
        id: 10,
        imagem: '/src/assets/ods10.svg',
        titulo: 'ODS 10: Redução das Desigualdades',
        texto: 'Ao transformar conteúdos científicos em uma linguagem acessível, o projeto democratiza o acesso ao conhecimento, promovendo inclusão educacional e redução das barreiras ao entendimento científico por parte do público leigo, especialmente jovens e estudantes de contextos educacionais diversos.'
    }
];

const integrantes = [
    {
        nome: "Ivan Henrique",
        foto: "/src/assets/ivan.png",
        tags: ["Design", "Programação", "Pesquisa", "Testes"],
        descricao: [
            "Atua no projeto como designer e desenvolvedor. Além de contribuir com a pesquisa, é responsável pela programação da aplicação e pela realização dos testes, garantindo a estabilidade e a usabilidade do produto final."
        ]
    },
    {
        nome: "Mariana Araripe",
        foto: "/src/assets/mariana.png", 
        tags: ["Design", "Documentação", "Programação", "Pesquisa"],
        descricao: [
            "Atua como designer principal do projeto Neuro27. É responsável por toda a documentação e por grande parte da pesquisa, colaborando para transformar conceitos de neurociência e psicologia em soluções aplicáveis ao design da aplicação."
        ]
    }
];

export function Sobre() {
    const [modalAberto, setModalAberto] = useState(false);
    const [odsSelecionado, setOdsSelecionado] = useState<Ods | null>(null);
    const [integranteAtualIndex, setIntegranteAtualIndex] = useState(0);

    const integranteAtual = integrantes[integranteAtualIndex];

    const proximoIntegrante = () => {
        setIntegranteAtualIndex((prevIndex) => (prevIndex + 1) % integrantes.length);
    };

    const integranteAnterior = () => {
        setIntegranteAtualIndex((prevIndex) => (prevIndex - 1 + integrantes.length) % integrantes.length);
    };

    const abrirModal = (ods: Ods) => {
        setOdsSelecionado(ods);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setOdsSelecionado(null);
    };

    const getTagIcon = (tag: string) => {
        switch (tag) {
            case "Pesquisa":
                return <FaSearch />;
            case "Design":
                return <FaPencilRuler />;
            case "Programação":
                return <FaCode />;
            case "Testes":
                return <FaClipboardCheck />;
            case "Documentação":
                return <FaFileAlt />;
            default:
                return null;
        }
    };

    return (
        <div className={estilos.gridConteiner}>
            <Cabecalho />
            <main className={estilos.conteudo}>
                <section className={`${estilos.secao} ${estilos.secaoComColunas}`}>
                    <div className={estilos.sobreEsquerda}>
                        <div className={estilos.sobrePoligono}>
                        </div>
                    </div>
                    <div className={estilos.sobreDireita}>
                        <div className={estilos.conteinerTitulo}>
                            <h1 className={estilos.titulo}>Nosso projeto</h1>
                        </div>
                        <Dropdown />
                    </div>
                </section>
                <section className={estilos.secao}>
                    <div className={estilos.sobre}>
                        <h1 className={estilos.tituloOds}>ODS</h1>
                        <div className={estilos.imagensContainer}>
                            {odsData.map(ods => (
                                <div key={ods.id} className={estilos.odsIconContainer}>
                                    <img className={estilos.odsIcon} alt={`Ícone do ODS ${ods.id}`} src={ods.imagem} />
                                    <div className={estilos.odsIconOverlay}>
                                        <button className={estilos.verMaisBotao} onClick={() => abrirModal(ods)}>
                                            Ver mais
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className={estilos.secao}>
                    <div className={estilos.sobre}>
                        <h1 className={estilos.tituloIntegrantes}>Integrantes</h1>

                        <div className={estilos.integranteContainer}>
                            <button onClick={integranteAnterior} className={estilos.setaNavegacao}>
                                <FaArrowLeft />
                            </button>
                            <div className={estilos.imagemContainer}>
                                <img
                                    src={integranteAtual.foto}
                                    alt={`Foto de ${integranteAtual.nome}`}
                                    className={estilos.imagemPerfil}
                                />
                            </div>   
                            <div className={estilos.cartaoIntegrante}>
                                <h2 className={estilos.nomeIntegrante}>{integranteAtual.nome}</h2>
                                <div className={estilos.tags}>
                                    {integranteAtual.tags.map((tag, index) => (
                                        <span key={index} className={estilos.tag}>{getTagIcon(tag)} {tag}</span>
                                    ))}
                                </div>
                                {integranteAtual.descricao.map((linha, index) => (
                                    <p key={index} className={estilos.descricao}>{linha}</p>
                                ))}
                            </div>
                            <button onClick={proximoIntegrante} className={estilos.setaNavegacao}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </section>


            </main>

            {modalAberto && odsSelecionado && (
                <div className={estilos.modalOverlay} onClick={fecharModal}>
                    <div className={estilos.modalBloco} onClick={e => e.stopPropagation()}>
                        <h2>{odsSelecionado.titulo}</h2>
                        <p>{odsSelecionado.texto}</p>
                        <button onClick={fecharModal} className={estilos.fecharModalBotao}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
} 