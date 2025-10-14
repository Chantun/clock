export default function SingleClock({ deg1, deg2, theme, clock }) {
	return (
		<div className={clock ? 'clock show-clock' : 'clock'}>
			<div
				className={theme ? 'stick dark' : 'stick'}
				style={{ transform: `translateY(-50%) rotate(${deg1}deg)` }}
			></div>
			<div
				className={theme ? 'stick dark' : 'stick'}
				style={{ transform: `translateY(-50%) rotate(${deg2}deg)` }}
			></div>
		</div>
	);
}
