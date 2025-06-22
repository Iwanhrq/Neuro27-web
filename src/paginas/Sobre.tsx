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
        texto: 'Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades. Inclui metas para reduzir a mortalidade materna e neonatal, acabar com epidemias de doenças transmissíveis, e garantir o acesso universal a serviços de saúde sexual e reprodutiva.'
    },
    {
        id: 4,
        imagem: '/src/assets/ods4.svg',
        titulo: 'ODS 4: Educação de Qualidade',
        texto: 'Assegurar a educação inclusiva e equitativa de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos. Visa garantir que todas as meninas e meninos completem o ensino primário e secundário gratuito, e tenham acesso a um desenvolvimento de qualidade na primeira infância.'
    },
    {
        id: 10,
        imagem: '/src/assets/ods10.svg',
        titulo: 'ODS 10: Redução das Desigualdades',
        texto: 'Reduzir a desigualdade dentro dos países e entre eles. Foca em alcançar e sustentar o crescimento da renda dos 40% mais pobres da população a uma taxa maior que a média nacional, e em empoderar e promover a inclusão social, econômica e política de todos.'
    }
];

const integrantes = [
    {
        nome: "Ivan Henrique",
        foto: "/src/assets/ivan.png",
        tags: ["Design", "Programação", "Pesquisa", "Testes"],
        descricao: [
            "Descrição do primeiro integrante.",
            "Mais detalhes aqui.",
            "..."
        ]
    },
    {
        nome: "Mariana Araripe",
        foto: "/src/assets/mariana.png", // Placeholder, user can change this
        tags: ["Design", "Documentação", "Programação", "Pesquisa"], // Placeholder tags
        descricao: [
            "Descrição do segundo integrante.",
            "Mais detalhes aqui.",
            "..."
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