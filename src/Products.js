import React, { useState, useEffect } from 'react';


function Products() {
   
const [data, setData] = useState([]);
const getData = () => {
fetch('data.json'
, {
headers: {
'Content-Type': 'application/json',
'Accept': 'application/json'
}
}
)
.then(function (response) {
// setData(response)
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
// {console.log(data)}
return (
<div className="Products">
{
data && data.length && data.map(products =>(<p>{products.products.map(item=>(<td>{item.name} </td>))}</p>))
}
</div>
);

    
  
}
export default Products;