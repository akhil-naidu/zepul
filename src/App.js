import './App.css';

function App() {
  return (
    <div className='App'>
      <div>Hello Again, from test branch</div>
      <div>{process.env.REACT_APP_TITLE}</div>
    </div>
  );
}

export default App;
