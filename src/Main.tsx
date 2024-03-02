import { useAppContext } from "./AppContext"
import { Content } from "./Content"


export function Main(){
    const {user} = useAppContext();
    return (
        <main>
            <h1>Witamy</h1>
        
        <p>
            {user ? `Witaj ${user.name}!` : 'Zaloguj się'}
        </p>
        <Content/>
        </main>
    )
}