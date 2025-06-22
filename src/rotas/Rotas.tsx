import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from '../paginas/Login'
import {Inicial} from '../paginas/Inicial'
import {Usuario} from '../paginas/Usuario'
import { Sobre } from '../paginas/Sobre'
import { Detalhe } from '../paginas/Detalhe'

export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path='usuario' element={ <Usuario operacao='novo' /> } />
                <Route path='inicial' element={ <Inicial /> } />
                <Route path='sobre' element={ <Sobre /> } />
                <Route path='perfil' element={ <Usuario operacao='perfil' /> } />
                <Route path='detalhe' element={ <Detalhe /> } />
            </Routes>
        </BrowserRouter>
    )
}
