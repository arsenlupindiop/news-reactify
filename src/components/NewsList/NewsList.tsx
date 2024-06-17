import NewsItem from "../NewsItem/NewsItem"
import styles from "./styles.module.css"
import withSkeleton from "../../helpers/hocs/withSkeleton"
import { INews } from "../../interfaces"

interface Props {
	news?: INews[]
}

const NewsList = ({ news }: Props) => {
	return (
		<ul className={styles.list}>
			{news?.map((item) => (
					<NewsItem item={item} key={item.id} />
			))}
		</ul>
	) 
}

const NewsListWithSceleton = withSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWithSceleton