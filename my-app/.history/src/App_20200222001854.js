import React from 'react';
import './App.css';

function App() {
  const [itemList, setItemList] = React.useState({
    list: []
  }); 
  React.useEffect(() => {
    fetch('http://localhost:3000/App.json')
      .then(results => results.json())
      .then(data => {
        console.log("data:", data);
        setItemList({ ...itemList, list: data.response });
      });
  }, []);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Present Balance</th>
            <th>Merchant Fee</th>
            <th>Previous Balance</th>
            <th>Last Amount Deducted</th>
            <th>Deduct Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            itemList.list.map(item => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.rank}</td>
                  <td>{item.available ? "Yes" : "No"}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
