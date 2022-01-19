import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
// useParams возвращает параметры, мы можем задавать массу параметров.
const Singlepage = () => {
    // Из Use params сразу деструктурируем параметр из Роута, мы знаем как он называется поэтому можем выводить его сразу.
    // Для того что бы отрисовать пост нам необходимо использовать хуки useState и useEffect
    // Так же получаем ОБЪЕКТ данных а не массив, через фетч, по уникальному ключу id 
    const { id } = useParams();
    const [post, setPosts] = useState(null)
    // Функция работает с двумя параметрами, 1. указывает куда мы хотим переместить пользователя, 2-ой преполагает 2 опции.
    const navigate = useNavigate()
    // navigate может принимать как ссылку, но для хождения по истории необходимо испольхзовать цифры "-1" движение на страницу назад.
    const goBack = () => navigate(-1)
    // При перемещенни по ссылке если не треуется записыватьв историю перемещение, то необходимо указать опцию replace : true?, второй опцией можно передать
    // state и передать строкой что то, то бы потом можно было это использовать.
    const goHome = () => navigate('/', {replace:true}) //<- это плахая практика, лучше использовать Link для такого рода перемещений.

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(result => result.json())
            .then(data => setPosts(data))
    }, [id])
    // Рендер происходит при помощи оператора && если первый элемент true то всё после && будет отрендерено, если false то будет проигнорировано.
    // Так же передаём в Link id поста который мы хотим редактировать.
    return (
        <>
            <div>
                {post && (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to={`/posts/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </>
                )}

            </div>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goHome}>goHome</button>

        </>

    );
}

export { Singlepage };

