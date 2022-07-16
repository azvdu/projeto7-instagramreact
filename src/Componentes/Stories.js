export default function Stories(){
    const stories = [
        {usuario: "9gag", imagem:"assets/img/9gag.svg"}, 
        {usuario: "meowed", imagem:"assets/img/meowed.svg"}, 
        {usuario: "barked", imagem:"assets/img/barked.svg"}, 
        {usuario: "nathanwpylestrangeplanetag", imagem:"assets/img/nathanwpylestrangeplanet.svg"}, 
        {usuario: "wawawicomics", imagem:"assets/img/wawawicomics.svg"}, 
        {usuario: "respondeai", imagem:"assets/img/respondeai.svg"}, 
        {usuario: "filomoderna", imagem:"assets/img/filomoderna.svg"}, 
        {usuario: "memeriagourmet", imagem:"assets/img/memeriagourmet.svg"}
    ]

    return(
        <div className="stories">
            {stories.map((story) => <Story key = {story.imagem} imagem = {story.imagem} usuario = {story.usuario} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story({imagem, usuario}){
    return(
        <div className="story">
            <div className="imagem">
                <img src={imagem} />
            </div>
            <div className="usuario">
                {usuario}
            </div>
      </div>
    )
}