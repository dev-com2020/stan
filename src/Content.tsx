type Props = {
    permissions: undefined | string[]
}

export function Content({permissions}:Props){
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