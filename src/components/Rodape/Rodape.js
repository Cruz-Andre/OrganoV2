import './style.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section className='footer-links'>
                <a href='https://facebook.com'><img src='./imagens/fb.png' alt='facebook link' /></a>
                <a href='https://twitter.com'><img src='./imagens/tw.png' alt='twitter link' /></a>
                <a href='https://instagram.com'><img src='./imagens/ig.png' alt='instagram link' /></a>
            </section>

            <section>
                <img src='./imagens/logo.png' alt='logo'></img>
            </section>

            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape