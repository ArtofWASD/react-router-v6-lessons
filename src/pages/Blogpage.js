import { useState, useEffect } from "react"
import {Link, useLocation} from "react-router-dom";

// Для работы с Location необходимо использовать Хук useLocation
const Blogpage = () => {
    const [posts, setPosts] = useState([])

    console.log(useLocation());

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result => result.json())
            .then(data => setPosts(data))
    }, [])
    // формируем посты в key передаётся уникальный идентификатор из объекта post а в to уже как должна выглядеть ссылка
    // внутрь Link Мы помещаем список из тайтлов постов которые опять же приходят из объекта Posts
    return (
        <div>
            <h1>Our news</h1>
            <Link to="/posts/new"> Add new post</Link>
            {
                posts.map(post =>(
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))

            }
        </div>
    )
}

export { Blogpage }