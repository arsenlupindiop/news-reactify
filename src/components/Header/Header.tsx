import { themeIcons } from "../../assets"
import { formatDate } from "../../helpers/formatDate"
import styles from "./styles.module.css"
import { useTheme } from "../../context/ThemeContext"

const Header = () => {
	const {isDark, toggleTheme} = useTheme()
    return (
			<header
				className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
			>
				<div className={styles.info}>
					<h1 className={styles.title}>Frontend news</h1>
					<p className={styles.date}>{formatDate(new Date())}</p>
				</div>
				
                <img src={isDark ? themeIcons.dark : themeIcons.light} width={30}  onClick={toggleTheme} alt="theme"/>
			</header>
		)
}

export default Header