import { getLatestNews } from "../../api/apiNews"
import BannersList from "../BannersList/BannersList"
import styles from "./styles.module.css"
import useFetch from "../../helpers/hooks/useFetch"

const LatestNews = () => {
	const { data, loading } = useFetch(getLatestNews)
	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} loading={loading} />
		</section>
	)
}

export default LatestNews