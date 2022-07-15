import ReactDom from "react-dom";

import Navbar from "./Componentes/Navbar";
import Corpo from "./Componentes/Corpo";

function App(){
    return(
        <div>
            <Navbar />
            <Corpo />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector(".root"))