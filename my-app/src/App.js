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
        data.response = data.response.sort((price1, price2) =>
        parseFloat(price1.presentBalance) - parseFloat(price2.presentBalance));
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
                <tr key={item.id}>
                    <td>{item.presentBalance}</td>
                  <td>{item.merchantFee}</td>
                  <td>{item.previousBalance}</td>
                  <td>{item.lastAmountDeducted}</td>
                  <td>{item.deductBalance}</td>
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
