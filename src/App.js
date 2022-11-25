import './App.css';

function App() {
  return (
    <div className='App'>
      <div>Hello Test</div>
      <div>{process.env.REACT_APP_TITLE}</div>
    </div>
  );
}

export default App;
