import { Content } from "./Content"
import { User } from "./api/authenticate"

type Props = {
    user: undefined | User
    permission: undefined | string[]
}

export function Main({user, permission}: Props){
    return (
        <main>
            <h1>Witamy</h1>
        
        <p>
            {user ? `Witaj ${user.name}!` : 'Zaloguj się'}
        </p>
        <Content permissions={permission}/>
        </main>
    )
}