import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Sceleton from '../../components/Sceleton/Sceleton'
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'

const Main = () => {
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [categories, setCategories] = useState([])
	const [selectedCategories, setSelectedCategories] = useState('All')
	const totalPages = 10
	const pageSize = 10

	const fetchNews = async () => {
		try {
			setLoading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
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
	}, [currentPage, selectedCategories])
	useEffect(() => {
		fetchCategories()
	}, [])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
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
		<Categories categories={categories} setSelectedCategory={setSelectedCategories} selectedCategory={selectedCategories}/>
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
				totalPages={totalPages}
			/>
			{loading ? <Sceleton type='item' count={10} /> : <NewsList news={news} />}
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</main>
	)
}

export default Main
