import styles from "./styles.module.css"


interface Props {
	image?: string
}

const Image = ({ image }: Props) => {
    return (
			<div className={styles.wrapper}>
				{image ? <img src={image} className={styles.image}></img> : null}
			</div>
		) 
}

export default Image