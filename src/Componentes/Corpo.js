import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


export default function Corpo(){
    return(
         <div className="corpo">
             <div className="esquerda">
                <Stories />
            
            <div className="posts">
                <Posts />
            </div>

             </div>

             <div className="sidebar">
                 <Sidebar />
             </div>

         </div>
    )
}