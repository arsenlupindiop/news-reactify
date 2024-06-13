import styles from "./styles.module.css"

const Search = ({keywords, setKeywords}) => {
	return (
		<div className={styles.seacrh}>
			<input type="text" value={keywords} className={styles.input} onChange={(e) => setKeywords(e.target.value)} placeholder="javascript"></input>
		</div>
	)
}

export default Search