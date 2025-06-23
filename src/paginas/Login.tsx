import estilos from './Login.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalMensagem } from '../componentes/ModalMensagem'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  email: string
  senha: string
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Informe um e-mail válido!' }),
  senha: z.string().length(6, { message: 'Defina uma senha com 6 caracteres' })
})

export function Login() {
  const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false)
  const [modalMensagemTitulo, setModalMensagemTitulo] = useState('')
  const [modalMensagemTexto, setModalMensagemTexto] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema)
  })

  const navegacao = useNavigate()

  function autenticarUsuario(data: FormValues) {
    if (data.email === 'usuario@email.com' && data.senha === '123456') {
      navegacao('inicial')
    } else {
      setModalMensagemTitulo('Identificação')
      setModalMensagemTexto('Falha na autenticação do usuário')
      exibirModal()
    }
  }

  function novoUsuario() {
    navegacao('usuario')
  }

  function exibirModal() {
    setModalMensagemVisivel(true)
  }

  function ocultarModal() {
    setModalMensagemVisivel(false)
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit(autenticarUsuario)()
    }
  }

  return (
    <div className={estilos.backgroundWrapper}>
      <div className={estilos.bgImage}></div>
      <div className={estilos.bgGray}></div>
      <div className={estilos.conteiner}>
        <form
          className={estilos.formulario}
          onSubmit={handleSubmit(autenticarUsuario)}
          onKeyDown={handleKeyDown}
        >
          <div className={estilos.imagemContainer}>  
            <div className={estilos.imagemPoligono}></div>
          </div>

          <div className={estilos.loginCampos}>
            <h1 className={estilos.tituloProjeto}>
              Neuro27
            </h1>
            <h1 className={estilos.titulo}>
              Bem-vindo(a) de volta!
            </h1>

            <input
              {...register('email')}
              className={estilos.campo}
              placeholder='E-mail'
            />
            {errors?.email && (
              <p className={estilos.mensagem}>
                {errors.email.message}
              </p>
            )}

            <input
              {...register('senha')}
              className={estilos.campo}
              placeholder='Senha'
              type='password'
            />
            {errors?.senha && (
              <p className={estilos.mensagem}>
                {errors.senha.message}
              </p>
            )}

            <button
              className={estilos.novoUsuario}
              onClick={novoUsuario}
            >
              Ainda não possui uma conta? <span>Cadastre-se</span>
            </button>

            <button className={estilos.botao}>
              Entrar
            </button>


          </div>
        </form>

        <ModalMensagem
          exibir={modalMensagemVisivel}
          ocultar={() => ocultarModal()}
          titulo={modalMensagemTitulo}
          texto={modalMensagemTexto}
        />
      </div>
    </div>
  )
}
