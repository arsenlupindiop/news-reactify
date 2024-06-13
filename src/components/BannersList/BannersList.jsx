import styles from "./styles.module.css"
import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';


const BannersList = ({ banners }) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => (
			<NewsBanner key={banner.id} item={banner}/>
			))}
		</ul>
	)
}

const BannersListWithSceleton = withSkeleton(BannersList, 'banner', 10, 'row')
export default BannersListWithSceleton