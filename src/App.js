import logo from './logo.svg';
import './App.css';
import Header from './containerts/Header';
import Articles from './containerts/Articles';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div >
      <UserProvider>
        <Header/>
        <Articles theme = {{color: {primary : "pink"}}}/>
      </UserProvider>
    </div>
  );
}

export default App;
