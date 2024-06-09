import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Sceleton from '../../components/Sceleton/Sceleton'
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'

const Main = () => {
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [keywords, setKeywords] = useState('')
	const [categories, setCategories] = useState([])
	const [selectedCategories, setSelectedCategories] = useState('All')

    const debouncedKeywords = useDebounce(keywords, 1000)

	const fetchNews = async () => {
		try {
			setLoading(true)
			const response = await getNews({
				keywords: debouncedKeywords,
				page_number: currentPage,
				page_size: PAGE_SIZE,
				category: selectedCategories === 'All' ? null : selectedCategories
			})
			setNews(response.news)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}
	const fetchCategories = async () => {
		try {
			const response = await getCategories()
			setCategories(['All', ...response.categories])
		} catch (error) {
			console.warn(error)
		}
	}

	useEffect(() => {
		fetchNews()
	}, [currentPage, selectedCategories, debouncedKeywords])
	useEffect(() => {
		fetchCategories()
	}, [])

	const handleNextPage = () => {
		if (currentPage < TOTAL_PAGES) {
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	const handlePageClick = pageNumber => {
		setCurrentPage(pageNumber)
	}

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				setSelectedCategory={setSelectedCategories}
				selectedCategory={selectedCategories}
			/>
			<Search keywords={keywords} setKeywords={setKeywords} />
			{news.length > 0 && !loading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Sceleton type='banner' count={1} />
			)} 
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={TOTAL_PAGES}
			/>
			{loading ? <Sceleton type='item' count={10} /> : <NewsList news={news} />}
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={TOTAL_PAGES}
			/>
		</main>
	)
}

export default Main
