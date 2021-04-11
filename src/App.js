
import './App.css';
import Categories from './Categories.js';

import {
    Router,
    Route,
    BrowserRouter,
    Switch

} from "react-router-dom";
import * as reactDom from "react-dom";

import Products from './Products';

import { createBrowserHistory } from 'history'



function App() {
    const newHistory = createBrowserHistory();

    return (<div className="App">

        {
           
            <Router>
               <div>
                    <Switch>
                       <Route path="/Categories">
                        <Categories />
                        </Route>
                    </Switch>
                </div>
             </Router>
           
        }
    </div>

    )
}



export default App;
