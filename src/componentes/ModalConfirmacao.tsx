import estilos from './ModalConfirmacao.module.css'

interface ModalConfirmacaoProps {
    exibir: boolean
    titulo: string
    texto: string
    ocultar: () => void
}

export function ModalConfirmacao({exibir, ocultar, titulo, texto}: ModalConfirmacaoProps) {
    function confirmar(){
        // Implementar lógica de confirmação
        ocultar()
    }

    if (exibir) {
        return(
            <div className={estilos.conteiner}>
                <div className={estilos.modal}>
                    <p className={estilos.titulo}>{titulo}</p>

                    <div className={estilos.conteinerMensagem}>
                        <p className={estilos.mensagem}>{
                            texto.split('\n').map( (linha, index) => 
                                <p key={index}>{String(linha).slice(0,60)}</p> 
                            )
                        }</p>
                    </div>
                    
                    <div className={estilos.conteinerBotoes}>
                        <button 
                            className={estilos.botao}
                            onClick={confirmar}
                        >Confirmar</button>

                        <button 
                            className={estilos.botao}
                            onClick={ocultar}
                        >Cancelar</button>
                    </div>
                </div>
            </div>
        )    
    }
    return null
}
