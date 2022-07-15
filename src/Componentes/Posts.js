export default function Posts(){
    const posts= [
        {usuario: "meowed", imgUsuario: "meowed.svg", conteudo: "gato-telefone.svg", curtida: "respondeai.svg", perfilCurtida: "respondeai", qtdCurtidas: "101.523"},
        {usuario: "barked", imgUsuario: "barked.svg", conteudo: "dog.svg", curtida: "adorable_animals.svg", perfilCurtida: "adorable_animals", qtdCurtidas: "99.159"},
    ]

    return(
        <div className="posts">
            {posts.map((post) => <Post key= {post.conteudo} usuario= {post.usuario} imgUsuario= {post.imgUsuario} conteudo= {post.conteudo} curtida= {post.curtida} perfilCurtida= {post.perfilCurtida} qtdCurtidas= {post.qtdCurtidas}/>)}
        </div>
    )

}