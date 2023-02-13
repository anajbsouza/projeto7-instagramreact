import { useState } from "react";

export default function Post(props) {
    const [salvar, setSalvar] = useState("bookmark-outline");
    const [classe, setClasse] = useState("");
    const [curtida, setCurtida] = useState("heart-outline");
    const [classeCurtida, setClasseCurtida] = useState("");
    const [contador, setContador] = useState(parseInt(props.curtidasQuantidade));

    function salvarPostagem () {
        if(salvar === "bookmark-outline") {
            setSalvar("bookmark");
            setClasse("salvarPostagem");
        } else {
            setSalvar("bookmark-outline");
            setClasse("");
        }
    }

    function curtirIcone () {
        if(curtida === "heart-outline") {
            setCurtida("heart");
            setContador((contador+1));
        } else {
            setCurtida("heart-outline");
            setClasseCurtida("");
            setContador((contador-1));
        }
    }
    
    function curtirFoto () {
        if(curtida === "heart-outline") {
            setCurtida("heart");
            setContador((contador+1));
        }
    }
    

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.foto} onClick={curtirFoto} alt={props.nome} data-test="post-image" />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onDoubleClick={curtirFoto}>
                <img src={props.conteudo} alt={props.alt} onClick={curtirFoto} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={curtida} onClick={curtirIcone} class={classeCurtida} data-test="like-post" ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvar} class={classe} onClick={salvarPostagem} data-test="save-post" ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidasFoto} alt={props.curtidasNome}/>
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.curtidasNome}</strong> e <strong>outras {contador} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
