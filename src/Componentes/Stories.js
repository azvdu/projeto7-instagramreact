export default function Stories(){
    const stories = [
        {usuario: "9gag", imagem: "9gag.svg"},
        {usuario: "meowed", imagem: "meowed.svg"},
        {usuario: "barked", imagem: "barked.svg"},
        {ususario: "nathanwpylestrangeplanet", imagem: "nathanwpylestrangeplanet.svg"},
        {usuario: "wawawicomics", imagem: "wawawicomics.svg"},
        {ususario: "respondeai", imagem: "respondeai.svg"},
        {usuario: "filomoderna", imagem: "filomoderna.svg"},
        {usuario: "memeriagourmet", imagem: "memeriagourmet"},
    ]

    return(
        <div className="stories">
            {stories.map((story) => <Story imagem = {story.imagem} usuario = {story.usuario} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story({imagem, usuario}){
    return(
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${imagem}`} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
      </div>
    )
}