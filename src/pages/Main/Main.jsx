import styles from './styles.module.css'
import { getNews } from '../../api/apiNews'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PAGE_SIZE } from '../../constants/constants'
import useFetch from '../../helpers/hooks/useFetch'
import useFilters from '../../helpers/hooks/useFilters.js'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'
import LatestNews from '../../components/LatestNews/LatestNews'
const Main = () => {
	const { filters, changeFilter } = useFilters({
		keywords: '',
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
	})

    const debouncedKeywords = useDebounce(filters.keywords, 1000)

	const { data, loading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})
	return (
		<main className={styles.main}>
			<LatestNews loading={loading} banners={data && data.news} />
			<NewsByFilters loading={loading} news={data?.news} filters={filters}
				changeFilter={changeFilter} 
			/> 
		</main>
	)
}

export default Main
