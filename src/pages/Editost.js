import { useParams } from "react-router-dom";

const Editpost = () => {
    // Получаем Id из Хука
    const {id} = useParams();

    return ( 
    <div>
        <h1>Edit post {id}</h1>
    </div> 
    );
}
 
export  {Editpost};