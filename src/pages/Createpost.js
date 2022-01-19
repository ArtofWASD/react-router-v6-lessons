import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const Createpost = () => {
    // получаем из хука методо singOut
    const{singOut} = useAuth();
    // navigate для навигации
    const navigate = useNavigate();
    // в кнопку передаём обработчик событий который через функцию singOut в колбэк вызывает navigate который отправляет на главную без возможности вернуться назад
    return ( 
        <div>
            <h1> Create post</h1>
            <button onClick={() => singOut(()=> navigate('/', {replace : true}))}>singOut</button>
        </div>
     );
}
export {Createpost};