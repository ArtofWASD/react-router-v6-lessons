import { createContext, useState } from 'react';
// создаём переменную для контекста и по дефолту туда ничего не передаём null
export const AuthContext = createContext(null)
// Созадём провайдер который будет принимать на вход дочерний элемент и будет возвращать компонет <AuthContext.Provider> с дочерним элементом
// получать информацию можно из значения value в AuthContext.Provide
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // методы входа и выхода из логина в sing in мы будем получать нового пользователя и колбэк функцию которая будет заниматься переадресацией
    const singIn = (newUser, cb) =>{
        setUser(newUser);
        cb();
    }
    // при выходе в  setUser передаём null что говорит нам о том что пользователь покинул логин и опять же редирект
    const singOut = (cb) =>{
        setUser(null);
        cb();
    }
    // Данные значения будут доступны в любом месте приложения через хук useContext
    const value = {user, singIn, singOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
