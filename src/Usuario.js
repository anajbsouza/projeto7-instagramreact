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
            <img onClick={mudarFoto} src={foto} alt="imagem de perfil" data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon name="pencil" onClick={mudarNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}