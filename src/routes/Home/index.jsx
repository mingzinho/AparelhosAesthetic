
import '../../App.css';

export default function Home() {
    return (
        <main>
            <h1>ੈ✩‧₊˚ Bem-vindo ✧.*</h1>

            <div className="ad-container">
                <div className="ad">
                    <img src="../../public/img/anuncio1.png" alt="Anúncio 1" className="left-image" />
                    <div className="ad-details">
                    <a href="/Aparelhos"><p>'*•.. ♡CLIQUE AQUI!! ♡¸.•*'</p></a>
                        <p>⇢ ˗ˏˋ ࿐ྂ Compre meu iPhone! ࿐ྂ</p>
                        <a href="/Aparelhos"> <img src="../../public/img/iphone.jpg"  alt="Produto de Anúncio 1" /></a>
                        
                    </div>
                </div>

                <div className="ad">
                    <img src="../../public/img/anuncio2.png" alt="Anúncio 2" className="right-image" />
                    <div className="ad-details">
                    <a href="/Aparelhos"><p>'*•.. ♡CLIQUE AQUI!! ♡¸.•*'</p></a>
                        <p>⇢ ˗ˏˋ ࿐ྂ Compre meu Xiaomi! ࿐ྂ</p>
                        <a href="/Aparelhos"> <img src="../../public/img/xiaomi.jpg"  alt="Produto de Anúncio 2" /></a>
                    </div>
                </div>
                


            </div>
        </main>
    )
}