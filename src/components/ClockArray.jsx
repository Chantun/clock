import SingleClock from './SingleClock';
import numberParser from '../scripts/numbers';

export default function ClockArray({ id, n, theme, clock }) {
	const rotations = numberParser(n) || [];
	let cont = 0;
	const clocks = rotations.map((rotation) => {
		cont++;
		return (
			<SingleClock
				key={`${id}.${cont}`}
				deg1={rotation[0]}
				deg2={rotation[1]}
				theme={theme}
				clock={clock}
			></SingleClock>
		);
	});

	return <div className="clock-array">{clocks}</div>;
}
