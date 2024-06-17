import { getLatestNews } from "../../api/apiNews"
import BannersList from "../BannersList/BannersList"
import styles from "./styles.module.css"
import useFetch from "../../helpers/hooks/useFetch"
import {  NewsApiResponse } from "../../interfaces"

const LatestNews = () => {
	const { data, loading } = useFetch<NewsApiResponse, null>(getLatestNews)
	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} loading={loading} />
		</section>
	)
}

export default LatestNews