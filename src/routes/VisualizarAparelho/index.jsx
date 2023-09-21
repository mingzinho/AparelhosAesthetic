import { useParams, useNavigate } from "react-router-dom"
import { listaAparelhos } from "../../components/listaAparelhos"


export default function VisualizarAparelho() {

    const lista = listaAparelhos
    const navegacao = useNavigate()
    const { id } = useParams()

    const proc = lista.filter(aparelho => aparelho.id == id)
    const aparelho = proc[0]

    return (
        <main>
            <div className="product-box">
                <h2>{aparelho.modelo}</h2>
                <p>{aparelho.marca}</p>
                <p>{aparelho.descricao1}</p>
                <img src={aparelho.Image} alt={`Imagem de ${aparelho.modelo}`} width={300} />
                <p>R$ {aparelho.preco.toFixed(2)}</p>
                <button className="add-to-cart-button">・❥・adicionar ao carrinho・❥・</button>
            </div>
        </main>
    )
}