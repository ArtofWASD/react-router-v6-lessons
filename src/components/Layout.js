import { NavLink, Outlet } from 'react-router-dom';

// Outlet служит для того что бы показать коутеру где будет находится остальной контент
// Outlet может находится в любом месте, всё зависит от структуры приложения.

// NavLink автоматически на выбранный элемент навешивает класс active который мы можем стилизовать самостоятельно
// Для кастомизации линки могут принимать функции в виде className, в функцию передаётся объект что позволяет его сразу деструктуризировать
// isActive является елемнтом который отслеживает активность ссылки. при помощи тернарного оператора можно определить какой класс будет использоваться при активности ссылки
// Как обычно можно вынести сам оператор в переменную и подставить в класснейм переменную

const activeLink = ({isActive})=> isActive ? 'active-link' : '';
// Так же можно стилизовать ссылки черех style НО незабываем что функция передаётся в style ф не в ClassName
const styledLink = ({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})

const Layout = () => {
    return (
        <>
            <div>
                <header>
                    <NavLink to="/" className={({isActive})=> isActive ? 'active-link' : ''}>Home</NavLink>
                    <NavLink to="/posts" className = {activeLink}>Blog</NavLink>
                    <NavLink to="/about" style = {styledLink}>About</NavLink>
                </header>
            </div>
            <main className="container"> 
                <Outlet />
            </main>
            <footer className="container">
                2021
            </footer>
        </>
    )
}

export { Layout }