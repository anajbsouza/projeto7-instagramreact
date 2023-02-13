import { useState } from "react";

export default function Usuario() {
    const [nome, setNome] = useState("catanacomics");
    const [foto, setFoto] = useState("./img/catanacomics.svg")
    
    function mudarNome() {
        let novoNome = prompt("Que nome deseja colocar?");
        setNome(novoNome);
    }
    function mudarFoto() {
        let novaFoto = prompt("Insira o link da sua nova foto de perfil: ");
        setFoto(novaFoto);
    }


    return (
        <div class="usuario">
            <img onClick={mudarFoto} src={foto} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}