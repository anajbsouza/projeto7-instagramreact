import React from "react";
import Post from "./Post";
import arrayDePosts from "./arrayDePosts";

export default function Posts() {
    return (
        <div class="posts">
            {arrayDePosts.map((post) => (
                <Post foto={post.foto} 
                nome={post.nome} 
                conteudo={post.conteudo} 
                alt={post.alt} 
                curtidasFoto={post.curtidasFoto} 
                curtidasNome={post.curtidasNome} 
                curtidasQuantidade={post.curtidasQuantidade} />
            ))}
        </div>
    )
}