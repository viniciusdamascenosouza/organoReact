import './Banner.css'

const Banner = () => {
    return (
        //JSX é uma extensão React para a sintaxe da linguagem JavaScript que fornece uma 
        //maneira de estruturar a renderização de componentes usando uma sintaxe familiar a muitos desenvolvedores.
        //É semelhante em aparência ao HTML.
        <header className="banner">
            <img src="/images/banner.png" alt="O banner principal da Organo"/>
        </header>
    )
}

export default Banner