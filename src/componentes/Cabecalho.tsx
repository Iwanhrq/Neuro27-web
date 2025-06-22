import estilos from './Cabecalho.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";

export function Cabecalho(){
    const navegacao = useNavigate()

    return(
        <header className={estilos.conteiner}>
            <div className={estilos.logo} onClick={() => navegacao('/inicial')}>
                <p className={estilos.titulo}>Neuro27</p>
            </div>
            <nav className={estilos.navegacao}>
                <Link to="/inicial" className={estilos.link}>Inicial</Link>
                <Link to="/sobre" className={estilos.link}>Sobre</Link>

                
                <button 
                    className={estilos.botao}
                    onClick={() => navegacao('/')}
                >
                    <IoIosLogOut size={25} />
                </button>
            </nav>
        </header>
    )
} 

