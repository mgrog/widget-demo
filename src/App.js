import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import HeliumWidget from './widget';

const MyReactWidget = HeliumWidget.driver('react', {
  React: React,
  ReactDOM: ReactDOM,
});

function useXProps() {
  const [xprops, setXProps] = React.useState(window.xprops);
  React.useEffect(() => {
    window.xprops.onProps(props => {
      setXProps({ ...props });
    });
  }, []);
  return xprops;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Parent app, here is the widget</p>
        <MyReactWidget />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
