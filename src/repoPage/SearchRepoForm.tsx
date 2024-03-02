import { FieldError, useForm } from "react-hook-form";
import { SearchCriteria } from "../api/types";

type Props = {
    onSearch: (search: SearchCriteria) => void
}

export function SearchRepoForm({ onSearch }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SearchCriteria>()

    return (
        <form noValidate onSubmit={handleSubmit(onSearch)}>
            <div>
                <label htmlFor="org">Organizacja</label>
                <input type="text"
                    id="org"
                    {...register('org', { required: 'musisz wpisać organizacje' })} />
            </div>
            <div>
                <label htmlFor="repo">Repo</label>
                <input type="text"
                    id="repo"
                    {...register('repo', { required: 'musisz wpisać repozytorium' })} />
            </div>
            <div>
                <button type="submit" disabled={isSubmitting}>Search</button>
            </div>
        </form>
    )
}