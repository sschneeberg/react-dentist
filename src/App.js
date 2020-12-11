import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Procedures from './Components/Procedures';
import Contact from './Components/Contact';
import Weather from './Components/Weather';
import ProcedureDetails from './Components/ProcedureDetails';

import './App.css';

function App() {
    const proceduresList = [
        { name: 'Teeth Cleaning', id: 1, description: 'Routine cleaning $$$' },
        { name: 'Root Canal', id: 2, description: 'Very painful $$$$$$$' },
        { name: 'Crown', id: 3, description: 'Fake tooth part $$$$$' },
        { name: 'Filling', id: 4, description: 'Just feels weird $$$$' }
    ];

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
                        <li>
                            <Link to="/weather">WEATHER?</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route
                    path="/procedures"
                    exact
                    render={() => {
                        return <Procedures procedures={proceduresList} />;
                    }}
                />
                <Route path="/contact" component={Contact} />
                <Route path="/weather" component={Weather} />
                <Route
                    path="/procedures/:id"
                    render={(routeInfo) => {
                        let id = routeInfo.match.params.id;
                        let procedure = proceduresList.find(
                            (p) => p.id === parseInt(id)
                        );
                        return <ProcedureDetails procedure={procedure} />;
                    }}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
