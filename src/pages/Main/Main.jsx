import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Sceleton from "../../components/Sceleton/Sceleton";

const Main = () => {
	const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchNews = async () => {
			try {
		setLoading(true)
        const response = await getNews(); 
        setNews(response.news);	   
        setLoading(false)
			} catch (error) {
				console.log(error);
			}
		}
        fetchNews()
	}, [])
    
	return (
		<main className={styles.main}>
			{news.length > 0 && !loading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Sceleton type='banner' count={1} />
			)}

			{loading ? (
				<Sceleton type='item' count={10 } />
			) : (
				<NewsList news={news} />
			)}
		</main>
	)
}

export default Main