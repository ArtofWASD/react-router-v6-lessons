import { useState, useEffect } from "react"
import {Link} from "react-router-dom";


const Blogpage = () => {
    const [posts, setPosts] = useState([])

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