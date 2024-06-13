import styles from './styles.module.css'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'
import LatestNews from '../../components/LatestNews/LatestNews'
const Main = () => {
	return (
		<main className={styles.main}>
			<LatestNews  />
			<NewsByFilters /> 
		</main>
	)
}

export default Main
