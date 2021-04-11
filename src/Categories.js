import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import Products from './Products';
import {

     useRouteMatch,
     Link,
     Switch,
     Route
} from "react-router-dom";



function Categories() {
     const [data, setData] = useState([]);

     const getData = () => {
          fetch('/data.json'
               , {
                    headers: {
                         'Content-Type': 'application/json',
                         'Accept': 'application/json'
                    }
               }
          )
               .then(function (response) {
                    setData(response)
                    console.log(response)
                    return response.json();
               })
               .then(function (myJson) {
                    console.log(myJson);
                    setData(myJson)
               });
     }
     useEffect(() => {
          getData()
     }, [])
     { console.log(data) }
     let match = useRouteMatch();

     return (
          <Router>

               <div className="Categories">
                    {
                         data && data.length && data.map((Categories) => <button  ><Link to={`${match.url}/${Categories.category}`}>{Categories.category}</Link></button>)



                    }
                    <Switch>
                         <Route path={`${match.path}/:category`}>
                              <Products />
                         </Route>
                         <Route path={match.path}>
                             
                         </Route>
                    </Switch>
               </div>
          </Router>
     );

}

export default Categories;

