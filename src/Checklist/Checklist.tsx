import { ComponentPropsWithoutRef, ReactNode } from "react"
import { idValue } from "./types"
import { useChecked } from "./useChecked"

type Props<Data> = {
    data: Data[]
    id: keyof Data
    primary: keyof Data
    secondary: keyof Data
    renderItem?: (item: Data) => ReactNode
    checkedIds?: idValue[]
    onCheckedIdsChange?: (checkedIds: idValue[]) => void
} & ComponentPropsWithoutRef<'ul'>

export function CheckList<Data>({
    data,
    id,
    primary,
    secondary,
    renderItem,
    checkedIds,
    onCheckedIdsChange,
    ...ulProps
}: Props<Data>){
    const {resolvedCheckedIds,handleCheckChange} = useChecked({checkedIds,onCheckedIdsChange})
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
                        <label className="">
                            <input type="checkbox"
                            checked={resolvedCheckedIds.includes(idValue)}
                            onChange={handleCheckChange(idValue)}
                            />
                        <div>
                        <div>{primaryText}</div>
                        {typeof secondaryText === 'string' && (
                            <div>{secondaryText}</div>
                        )}
                        </div>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}