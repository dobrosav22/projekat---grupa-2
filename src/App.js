//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    fetch ('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
    .then(res=>console.log(res))
    .then(data=>console.log(data))
  );
}

export default App;
