import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // получаем из хука метод авторизации
    const {singIn} = useAuth()

    // для проверки наличия ключей в стейте можно использовать ?.и ключ и если false то задать деволтное значение || '/' 

    const fromPage = location.state?.from?.pathname || '/';
    // оТрубаем стандартное поведение у формы
    const handleSubmit = (e) =>{
        e.preventDefault();
        // получаем форму из ивента
        const form = e.target;
        // получаем юзера из формы через ноду name="username" и его значение которое ввёл юзер .value 
        const user = form.username.value
        // из хука используем метод singIn который рпинимает нового пользователя user и колбэчит его через navigate на ту ссылку из которой пришли formPage в которую можно передать 
        // replace : true, что бы по кнопке назад не смогли вернуться обратно
        singIn(user, ()=>navigate(fromPage, {replace : true}))


    }

    return (
        <div>
            <h1> login page</h1>
            <form onSubmit={handleSubmit}>
                <lable>
                    Name: <input type="text" name="username"/>
                </lable>
                <button type="submit">Login</button>
            </form>

        </div>
    );
}

export { LoginPage };