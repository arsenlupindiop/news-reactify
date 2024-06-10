import NewsItem from "../NewsItem/NewsItem"
import styles from "./styles.module.css"
import withSkeleton from "../../helpers/hocs/withSkeleton"

const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map((item) => (
					<NewsItem item={item} key={item.id} />
			))}
		</ul>
	)
}

const NewsListWithSceleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSceleton