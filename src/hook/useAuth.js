import { useContext } from 'react';
// берём из провайдера контекст 
import { AuthContext } from '../hoc/AuthProvider';
// возвращаем значение контектса из провайдера
export function useAuth(){
    return useContext(AuthContext)
}