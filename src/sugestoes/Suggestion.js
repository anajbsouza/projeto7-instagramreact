export default function Suggestion(props) {
    return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.imagem} alt={props.nome}/>
                    <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
    )
}