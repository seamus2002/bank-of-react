import './App.css';
import Clock from './components/Clock';
import Content from './components/Content';
import logo from './logo.png';

function App() {
  	return (
		<div className="App">
			<img src={logo} alt='logo' className='logo' />
			<Clock />
			<Content />
		</div>
  );
}

export default App;