import { useEffect, useState } from 'react';
import ClockArray from './ClockArray';
import Separator from './Separator';

export default function FullClock({ theme, clock }) {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	const hours = String(time.getHours()).padStart(2, '0').split('');
	const minutes = String(time.getMinutes()).padStart(2, '0').split('');
	const seconds = String(time.getSeconds()).padStart(2, '0').split('');

	return (
		<div className={theme ? 'clock-container dark' : 'clock-container'}>
			<div className="clock-section">
				<ClockArray
					clock={clock}
					theme={theme}
					id="h1"
					n={Number(hours[0])}
				></ClockArray>
				<ClockArray
					clock={clock}
					theme={theme}
					id="h2"
					n={Number(hours[1])}
				></ClockArray>
			</div>
			<Separator theme={theme}></Separator>
			<div className="clock-section">
				<ClockArray
					clock={clock}
					theme={theme}
					id="m1"
					n={Number(minutes[0])}
				></ClockArray>
				<ClockArray
					clock={clock}
					theme={theme}
					id="m2"
					n={Number(minutes[1])}
				></ClockArray>
			</div>
			<Separator theme={theme}></Separator>
			<div className="clock-section">
				<ClockArray
					clock={clock}
					theme={theme}
					id="s1"
					n={Number(seconds[0])}
				></ClockArray>
				<ClockArray
					clock={clock}
					theme={theme}
					id="s2"
					n={Number(seconds[1])}
				></ClockArray>
			</div>
		</div>
	);
}
