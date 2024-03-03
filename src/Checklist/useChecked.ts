import { useState } from "react";
import { idValue } from "./types";

export function useChecked() {
    const [checkedIds, setCheckedIds] = useState<idValue[]>([])

    const handleCheckChange = (checkedId: idValue) => () => {
        const isChecked = checkedIds.includes(checkedId)
        let newCheckedIds = isChecked
            ? checkedIds.filter((itemCheckedId) => itemCheckedId !== checkedId)
            : checkedIds.concat(checkedId)
        setCheckedIds(newCheckedIds)
    }
    return {handleCheckChange, checkedIds}
}
