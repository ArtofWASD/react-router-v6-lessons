import { Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Singlepage } from './pages/Singlepage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editost';
import { Notfoundpage } from './pages/Notfoundpage';
import { LoginPage } from './pages/Loginpage';

import { Layout } from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'
// Оборачиваем провайдером все роуты  приложения что бы была возможность получить в провайдер любые элементы из дочерних роутов
import { AuthProvider } from './hoc/AuthProvider'





// Так как Layout содержит в себе Outlet то он должен распологаться корневым компонентом и содержать в себе роуты дочерних компонентов
// Index является булевым значением для элемента Homepage, относительно корневого "/" все остальные роуты могут идти без "/"

// Параметры передаются через :, они могут быть какие угодно. 
// Если в параметрах указано несколько параметров, то возвращаться объект будет только по вызову страницы с двумя параметрами. (:/id:/title требует вызова post/12/posts)
// Мы можем созать именованую страницу которая не будет получать динамически данные, но на которую можно попасть допустим через ссылку или на прямую

// Для переадресации можно использовать Navigate, что бы не сохранять историю необходимо добавляем replace который по умолчанию false

// Для приватного роутинга элемента Createpost мы его обрачиваем в родителя RequireAuth потому что Createpost является дочерним элементом и будет попадать в RequireAuth {{children}}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}