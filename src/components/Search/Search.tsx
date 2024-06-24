import styles from "./styles.module.css"
import { useTheme } from "../../context/ThemeContext"

interface Props {
	keywords: string
	setKeywords: (keywords: string) => void,
}

const Search = ({keywords, setKeywords}: Props) => {
	const { isDark } = useTheme()
	return (
		<div className={`${styles.seacrh} ${isDark ? styles.dark : styles.light}`}>
			<input
				type='text'
				value={keywords}
				className={styles.input}
				onChange={e => setKeywords(e.target.value)}
				placeholder='javascript'
			></input>
		</div>
	)
}

export default Search