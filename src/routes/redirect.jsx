
import { Navigate } from 'react-router-dom'
//aqui pode vir um função que redireciona para as rotas desejadas

//exemplo se o usuário for admin e estiver logado vai para o menu de admin, se for um usuário comum é redirecionado para outro menu

function Redirect({ isAdmin, isLogged }) {
	if (!isAdmin && isLogged) {
		return <Navigate to='/menu-comum' />
	}

	if (isAdmin && isLogged) {
		return <Navigate to='/menu-admin' />
	}

	return <Navigate to='/login' />
}

export { Redirect }