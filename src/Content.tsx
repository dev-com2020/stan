import { useSelector } from "react-redux"
import { RootState } from "./store/store"


export function Content(){
    const permissions = useSelector(
        (state: RootState) => state.user.permissions)
        
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