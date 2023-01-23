import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome aqui..." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem..." />
            </form>
        </section>
    )
}

export default Formulario