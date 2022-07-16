import ReactDom from "react-dom";

import Navbar from "./Componentes/Navbar";
import Corpo from "./Componentes/Corpo";
import FundoMobile from "./Componentes/FundoMobile";

function App(){
    return(
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector(".root"))