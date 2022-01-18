import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
// useParams возвращает параметры, мы можем задавать массу параметров.
const Singlepage = () => {
    // Из Use params сразу деструктурируем параметр из Роута, мы знаем как он называется поэтому можем выводить его сразу.
    // Для того что бы отрисовать пост нам необходимо использовать хуки useState и useEffect
    // Так же получаем ОБЪЕКТ данных а не массив, через фетч, по уникальному ключу id 
    const {id} = useParams();
    const [post, setPosts] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(result => result.json())
            .then(data => setPosts(data))
    }, [id])
    // Рендер происходит при помощи оператора && если первый элемент true то всё после && будет отрендерено, если false то будет проигнорировано.
    // Так же передаём в Link id поста который мы хотим редактировать.
    return ( 
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
     );
}
 
export  {Singlepage};

