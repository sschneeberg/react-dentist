import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Procedures from './Components/Procedures';
import Contact from './Components/Contact';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/contact">CONTACT</a>
                        </li>
                        <li>
                            <a href="/procedures">PROCEDURES</a>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/procedures" component={Procedures} />
                <Route path="/contact" component={Contact} />
            </div>
        </BrowserRouter>
    );
}

export default App;
