import React from "react";
import Sugestao from "./Sugestao";
import arrayDeSugestoes from "./arrayDeSugestoes";

export default function Sugestoes() {
    return (
        <div class="sidebar">
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
                
            </div>
        </div>
    )
}