import { useLocation, Navigate } from 'react-router-dom';
// В роли дочернего элемента будет выступать любая страница
// получаем хук с данными пользвателя и 
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
    // получаем объект локации
    const location = useLocation();
    // из хука useAuth получаем юзера и передаём в if
    const {user} = useAuth();
    // Если мы можем попасть на страницу то мы будем отрисовывать children, если нет то редиректим на страницу логина, 
    // для понимания откуда мы попали на логин можно использовать state, в котором уже будем использовать объект из хука useLocation
    if (!user) {

        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;
}


export { RequireAuth }