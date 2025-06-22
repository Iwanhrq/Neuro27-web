import estilos from './Usuario.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { ModalMensagem } from '../componentes/ModalMensagem'
import { ModalConfirmacao } from '../componentes/ModalConfirmacao'

interface UsuarioProps {
    operacao: string
}

type FormValues = {
    nome: string
    email: string
    senha: string
}

const usuariosSchema = z.object({
    nome: z.string()
        .min(2, 'Informe um nome!')
        .max(25, 'Máximo de 25 caracteres!'),

    email: z.string()
        .email({ message: 'Informe um e-mail válido!' }),

    senha: z.string()
        .length(6, { message: 'Defina uma senha com 6 caracteres!' })
})

export function Usuario({ operacao }: UsuarioProps) {
    const [modalMensagemVisivel, setModalMensagemVisivel] = useState<boolean>(false)
    const [modalMensagemTitulo, setModalMensagemTitulo] = useState<string>('')
    const [modalMensagemTexto, setModalMensagemTexto] = useState<string>('')

    const [modalConfirmacaoVisivel, setModalConfirmacaoVisivel] = useState<boolean>(false)
    const [modalConfirmacaoTitulo, setModalConfirmacaoTitulo] = useState<string>('')
    const [modalConfirmacaoTexto, setModalConfirmacaoTexto] = useState<string>('')

    const navegacao = useNavigate()

    const { register, handleSubmit, formState: { errors }
    } = useForm<FormValues>({ resolver: zodResolver(usuariosSchema) })

    function criarUsuario(data: FormValues) {
        setModalMensagemTitulo('Novo usuário')
        setModalMensagemTexto(`Nome: ${data.nome} \nE-mail: ${data.email} \nSenha: ${data.senha}`)
        exibirModal('mensagem')
    }

    function fechar() {
        navegacao('/')
    }

    function alterarUsuario(data: FormValues) {
        try {
            setModalConfirmacaoTitulo('Alteração')
            setModalConfirmacaoTexto(`Nome ${data.nome} \n E-mail ${data.email} \n Senha ${data.senha}`)
            exibirModal('confirmacao')
        } catch (error) {
            setModalMensagemTitulo('Erro na alteração do usuário')
            setModalMensagemTexto(`Por favor, entre em contato com o suporte e informe esse código: ${error}`)
            exibirModal('mensagem')
        }
    }

    function excluirUsuario() {
        setModalConfirmacaoTitulo('Exclusão')
        setModalConfirmacaoTexto(`Confirma a exclusão do usuário?`)
        exibirModal('confirmacao')
    }

    function cancelar() {
        navegacao('inicial')
    }

    function exibirModal(modal: string) {
        modal == 'mensagem' ? setModalMensagemVisivel(true) : setModalConfirmacaoVisivel(true)
    }

    function ocultarModal(modal: string) {
        modal == 'mensagem' ? setModalMensagemVisivel(false) : setModalConfirmacaoVisivel(false)
    }

    return (
        <div className={estilos.backgroundWrapper}>
            <div className={estilos.bgImage}></div>
            <div className={estilos.bgGray}></div>
            <div className={estilos.conteiner}>
                <form className={estilos.formulario}>
                    <div className={estilos.imagemContainer}>
                        <div className={estilos.imagemPoligono}></div>
                    </div>

                    <div className={estilos.loginCampos}>
                        <h1 className={estilos.titulo}>{operacao == 'novo' ? 'Bem-vindo(a)' : 'Perfil'}</h1>

                        <input
                            {...register('nome')}
                            className={estilos.campo}
                            placeholder='Nome'
                        />
                        {errors.nome &&
                            <p className={estilos.mensagem}>
                                {errors.nome.message}
                            </p>
                        }

                        <input
                            {...register('email')}
                            className={estilos.campo}
                            placeholder='E-mail'
                        />
                        {errors.email &&
                            <p className={estilos.mensagem}>
                                {errors.email.message}
                            </p>
                        }

                        <input
                            {...register('senha')}
                            className={estilos.campo}
                            placeholder='Senha'
                            type='password'
                        />
                        {errors.senha &&
                            <p className={estilos.mensagem}>
                                {errors.senha.message}
                            </p>
                        }

                        <button
                            className={estilos.voltar}
                            onClick={fechar}
                        >
                            Já possui uma conta? <span>Faça login</span>
                        </button>

                        {operacao == 'novo'
                            ? <>
                                <button
                                    className={estilos.botao}
                                    onClick={handleSubmit(criarUsuario)}
                                >Cadastrar</button>


                            </>
                            : <>
                                <button
                                    className={estilos.botao}
                                    onClick={handleSubmit(alterarUsuario)}
                                >Confirmar alteração</button>

                                <button
                                    className={estilos.botao}
                                    onClick={handleSubmit(excluirUsuario)}
                                >Excluir conta</button>

                                <button
                                    className={estilos.botao}
                                    onClick={cancelar}
                                    type='button'
                                >Cancelar</button>
                            </>
                        }
                    </div>
                </form>

                <ModalMensagem
                    exibir={modalMensagemVisivel}
                    ocultar={() => ocultarModal('mensagem')}
                    titulo={modalMensagemTitulo}
                    texto={modalMensagemTexto}
                />

                <ModalConfirmacao
                    exibir={modalConfirmacaoVisivel}
                    ocultar={() => ocultarModal('confirmacao')}
                    titulo={modalConfirmacaoTitulo}
                    texto={modalConfirmacaoTexto}
                />
            </div>
        </div>
    )
}