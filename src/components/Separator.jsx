export default function Separator({ theme }) {
	return (
		<div className="separator">
			<div className={theme ? 'point dark' : 'point'}></div>
			<div className={theme ? 'point dark' : 'point'}></div>
		</div>
	);
}
