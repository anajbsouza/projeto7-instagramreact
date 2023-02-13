import React from "react";
import Story from "./Story";
import arrayDeStories from "./arrayDeStories";

export default function Stories() {
    return (
        <div class="stories">
            {arrayDeStories.map((story) => (
                <Story imagem={story.imagem} nome={story.nome} />
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}