
import { useNavigate } from "react-router-dom"
export default function Error(){

    const navegacao = useNavigate()

    const voltar =()=>{
            return navegacao('/')
    }

    return(
        <main>
            <h1>Erro 404 - Pagina não encontrada</h1>
            <h2>Parece que você se perdeu</h2>
            <h5>Essa pagina não existe</h5>
            <button className="voltar" onClick={voltar}>Go to Home</button>
            
        </main>
    )
}