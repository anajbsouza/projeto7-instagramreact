export default function Post(props) {
    function curtirPost() {
        <ion-icon name="heart"></ion-icon>
    }
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.foto} alt={props.nome}/>
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} alt={props.alt}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidasFoto} alt={props.curtidasNome}/>
                    <div class="texto">
                        Curtido por <strong>{props.curtidasNome}</strong> e <strong>{props.curtidasQuantidade}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
