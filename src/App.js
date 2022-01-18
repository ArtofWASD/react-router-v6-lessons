import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Singlepage } from './pages/Singlepage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editost';

import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout'

// Так как Layout содержит в себе Outlet то он должен распологаться корневым компонентом и содержать в себе роуты дочерних компонентов
// Index является булевым значением для элемента Homepage, относительно корневого "/" все остальные роуты могут идти без "/"

// Параметры передаются через :, они могут быть какие угодно. 
// Если в параметрах указано несколько параметров, то возвращаться объект будет только по вызову страницы с двумя параметрами. (:/id:/title требует вызова post/12/posts)
// Мы можем созать именованую страницу которая не будет получать динамически данные, но на которую можно попасть допустим через ссылку или на прямую
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={<Createpost />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}