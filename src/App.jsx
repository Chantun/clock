import { useState } from 'react';
import FullClock from './components/FullClock';

function App() {
	const [darkTheme, setTheme] = useState(false);
	const [clockState, setClock] = useState(false);

	return (
		<main className={darkTheme ? 'dark' : undefined}>
			<FullClock clock={clockState} theme={darkTheme}></FullClock>
			<button
				className={darkTheme ? 'theme-button dark' : 'theme-button'}
				onClick={() => setTheme((prevState) => !prevState)}
			></button>
			<button
				className={darkTheme ? 'clock-button dark' : 'clock-button'}
				onClick={() => setClock((prevState) => !prevState)}
			></button>
		</main>
	);
}

export default App;
