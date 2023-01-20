import './Banner.css'

function Banner () {
    //JSX = é como o REACT lê esse "html" e transforma em elementos no DOM
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="Banner principal da Organo"/>
        </header>
    )
}

export default Banner