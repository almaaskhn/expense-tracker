import './App.css';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [trans, setTrans] = useState([]);
const[editId, setEditId] = useState("");
  const addTransaction = (e) => {
    e.preventDefault();
if(editId){
  const temp = trans.map((y)=>(
y.id === editId ? {id: editId, description, amount} : y
  ))
setTrans(temp);
setEditId(null);
}
    else{
    setTrans([...trans, { id: Date.now(), description, amount }]);
    }
    setDescription("");
    setAmount(0);
  };
const editTxn = (x) =>{
setEditId(x.id);
setDescription(x.description);
setAmount(x.amount);
}
const deleteTxn = (x) =>{
const temp = trans.filter((y)=>(
  y.id != x.id
))
setTrans(temp);
};
  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((x) => (
            <tr key={x.id}>
              <td>{x.description}</td>
              <td>{x.amount}</td>
              <td>
                <button onClick={()=>editTxn(x)}>Edit</button>
                <button onClick={()=>deleteTxn(x)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Add Transactions</h2>
        <form onSubmit={addTransaction}>
          <div>
            <input
              placeholder="Enter Amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <input
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
