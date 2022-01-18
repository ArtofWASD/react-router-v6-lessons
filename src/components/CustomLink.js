import { Link, useMatch } from 'react-router-dom';

// Мы можем создать новый кастомный линк самостоятельно. Он должен принимать пропсы, обязательный пропс это children для передачи дочерних элементов
// Link Можно обернуть в любой элемент, в рест оператор ghjgc мы так же можем получить оставшие пропс если они есть. 
// в Хук useMatch приходит true или false что бы понять активный ли компонент или нет. если true то вернётся PathMatch<с параметрами ключей>

const CustomLink = ({children, to, ...props}) => {
    // в хук передаётся ссылка из Link to
    const match = useMatch(to)
    // Так как useMatch вернёт объект то его можно сразу деструктурировать
    console.log({match});
    return (
        <Link to={to}
        style= {{
            color: match ? 'var(--color-active)' : 'white'
        }}
         {...props}
         >
        {children}
        </Link>
    )
}

export default CustomLink;
export {CustomLink};