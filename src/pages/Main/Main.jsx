import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Sceleton from "../../components/Sceleton/Sceleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
	const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10;
	const pageSize = 10;

	useEffect(() => {
		const fetchNews = async (currentPage) => {
			try {
		setLoading(true)
		const response = await getNews(currentPage, pageSize)
        setNews(response.news);	   
        setLoading(false)  
			} catch (error) {
				console.log(error);
			}
		}
		fetchNews(currentPage)
	}, [currentPage])
    
	const handleNextPage = () => {
      if (currentPage < totalPages) {
		setCurrentPage(currentPage + 1);
	  }
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	const handlePageClick = (pageNumber) => {
			setCurrentPage(pageNumber)
	}


	return (
		<main className={styles.main}>
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