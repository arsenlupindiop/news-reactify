import { useState } from "react"
import { IFilters } from "../../interfaces";

const useFilters = (initialFilters: IFilters) => {
    const [filters, setFilters] = useState<IFilters>(initialFilters);

	const changeFilter = (key: string, value: string | null | number) => {
	     setFilters(prev  => {
		 return {...prev, [key]: value}
	})}
    return {filters, changeFilter}
}

export default useFilters