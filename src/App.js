import { BrowserRouter, Route, Link } from 'react-router-dom';
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
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/procedures">PROCEDURES</Link>
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
