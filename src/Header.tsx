import {User} from "./api/authenticate";

type Props = {
    user: undefined | User
    onSignInClick: () => void
    loading: boolean
}

export function Header({
    user,
    onSignInClick,
    loading,
}: Props) {
    <header>
        { user ? (<span>
            {user.name} has signed in
        </span>) : (
            <button onClick={onSignInClick} disabled={loading}>
                {loading ? '...' :'Zaloguj się'}
            </button>
        )}
    </header>
}