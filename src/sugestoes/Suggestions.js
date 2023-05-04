import React from "react";
import Suggestion from "./Suggestion";
import arrayDeSugestoes from "./arrayDeSugestoes";
import User from "../components/Usuario";

export default function Sugestoes() {
    return (
        <div class="sidebar">
            <User />
            <div class="sugestoes">
                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>
                <div class="sugestoes">
                    {arrayDeSugestoes.map((sugestao) => (
                        <Suggestion imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao} />
                    ))}
                </div>
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>
                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}