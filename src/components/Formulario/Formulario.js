import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../botao/Botao'
import { useState } from 'react'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Formulário foi submetido =>', nome, cargo, imagem)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio="true"
                    label="Nome" 
                    placeholder="Digite seu nome aqui..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio="true" 
                    label="Cargo" 
                    placeholder="Digite seu cargo..." 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem..." 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio="true" label="Times" itens={times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario