import { useLocation, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../componentes/Cabecalho';
import estilos from './Detalhe.module.css';

export function Detalhe() {
    const location = useLocation();
    const navigate = useNavigate();
    const { titulo, texto } = location.state || { titulo: 'Erro', texto: 'Nenhuma informação encontrada.' };

    return (
        <div className={estilos.gridConteiner}>
            <Cabecalho />
            <main className={estilos.conteudo}>
                <div className={estilos.container}>
                    <h1 className={estilos.titulo}>{titulo}</h1>
                    <p className={estilos.texto}>{texto}</p>
                    <button className={estilos.botaoVoltar} onClick={() => navigate(-1)}>
                        Voltar
                    </button>
                </div>
            </main>
        </div>
    );
} 