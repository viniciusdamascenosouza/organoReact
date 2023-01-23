import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome aqui..." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem..." />
                <ListaSuspensa label="Times" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario