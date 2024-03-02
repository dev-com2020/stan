import {User} from "./api/authenticate";

type Props = {
    user: undefined | User
    onSignInClick: () => void
    loading: boolean
}