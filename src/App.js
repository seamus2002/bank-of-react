import './App.css';
import Clock from './components/Clock';
import Content from './components/Content';
import logo from './logo.png';

function App() {
  	return (
		<div className="App">
			<br />
			<br />
			<div className='container'>
				<img src={logo} alt='logo' className='logo' />
				<Clock />
			</div>
			<Content />
		</div>
  );
}

export default App;