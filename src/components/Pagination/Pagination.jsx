import styles from "./styles.module.css"

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, currentPage, handlePageClick }) => {
	return (
		<div className={styles.pagination}>
			<button disabled={currentPage === 1} onClick={handlePreviousPage} className={styles.arrow}>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => (
					<button
						className={styles.pageNumber }
						onClick={() => handlePageClick(index + 1)}
						key={index}
						disabled={currentPage === index + 1}
					>
						{index + 1}
					</button>
				))}
			</div>
			<button disabled={currentPage === totalPages} onClick={handleNextPage} className={styles.arrow}>
				{'>'}
			</button>
		</div>
	)
}

export default Pagination