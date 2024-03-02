import { useAppContext } from "./AppContext"

export function Content(){
    const { permissions } = useAppContext()
    if (permissions === undefined){
        return null
    }
    return permissions.includes('admin') ? (
        <p>
            Ważne rzeczy robi tylko admin
        </p>
    ) : (
        <p>
            Zbyt małe uprawnienia
        </p>
    )
}