import { ComponentPropsWithoutRef, ReactNode } from "react"

type Props<Data> = {
    data: Data[]
    id: keyof Data
    primary: keyof Data
    secondary: keyof Data
    renderItem?: (item: Data) => ReactNode
} & ComponentPropsWithoutRef<'ul'>

export function CheckList<Data>({
    data,
    id,
    primary,
    secondary,
    renderItem,
    ...ulProps
}: Props<Data>){
    return (
        <ul className="" {...ulProps}>
            {data.map((item) => {
                if (renderItem) {
                    return renderItem(item)
                }
                const idValue = item[id] as unknown
                if (
                    typeof idValue !== 'string' &&
                    typeof idValue !== 'number'
                ){
                    return null
                }
                const primaryText = item[primary] as unknown
                if (typeof primaryText !== 'string'){
                    return null
                }
                const secondaryText = item[secondary] as unknown
                return (
                    <li key={idValue}>
                        <div>{primaryText}</div>
                        {typeof secondaryText === 'string' && (
                            <div>{secondaryText}</div>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}