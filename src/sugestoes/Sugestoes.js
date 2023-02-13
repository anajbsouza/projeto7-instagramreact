import React from "react";
import Sugestao from "./Sugestao";
import arrayDeSugestoes from "./arrayDeSugestoes";
import Usuario from "../Usuario";

export default function Sugestoes() {
    return (
        <div class="sidebar">
            <Usuario />
            <div class="sugestoes">
                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>
                <div class="sugestoes">
                    {arrayDeSugestoes.map((sugestao) => (
                        <Sugestao imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao} />
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