import { Header } from '../../components/Header'

import './style.scss'

export function ErrorPage() {
    return (
        <div className='error-page'>
            <Header />
            <p className="error-title">404</p>
            <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
            <a className='error-link' href='/home'>Retournez sur la page d'accueil</a>
        </div>
    )
}