import {useState, useEffect} from 'react';
import axios from 'axios';
import TransactionAction from "./component/TransactionAction";
import TransactionContent from "./component/TransactionContent";


function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState(null);

  useEffect( () => {
    axios.get('http://localhost:8080/transactions')
    .then( res => { 
      console.log(res.data); // response ค่า {transactions: Array(34)} นี้มา
      setTransactions(res.data.transactions);
    })
  }, []);

  // create ข้อมูลจาก form เข้าไปใน server api
  const addTransaction = (obj) => {
    axios.post('http://localhost:8080/transactions', obj)
    .then(res => {
      console.log(res.data)
      const newTransactions = [...transactions];
      newTransactions.unshift(res.data.transaction);
      newTransactions.sort( (a, b) => (a.date < b.date) ? -1 : 1 ) 
      setTransactions(newTransactions);
  }) 
  }

  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:8080/transactions/${id}`)
    .then(() => {
      // const newTransactions = transactions.filter(item => item.id !== id);
      // setTransactions(newTransactions);
      const idx = transactions.findIndex(item => item.id === id);
      if(idx !== -1){
        const newTransactions = [...transactions];
        newTransactions.splice(idx, 1);
        setTransactions(newTransactions);
      }
    })
  }

  const selectTransaction = (transaction) => {
    setEditTransaction(transaction);
  }
  // console.log(editTransaction)

  const updateTransaction = (id, obj) => {
    axios.put(`http://localhost:8080/transactions/${id}`, obj)
    .then( res => {
      // console.log(res.data.transaction);
      const idx = transactions.findIndex(item => item.id === id);
      if(idx !== -1) {
        const newTransactions = [...transactions];
        newTransactions[idx] = res.data.transaction;
        setTransactions(newTransactions);
        setEditTransaction(null);
      }
    })
  }

  return (
    <div className="container mw-md">
      <TransactionAction addTransaction={addTransaction} editTransaction={editTransaction} setEditTransaction={setEditTransaction} updateTransaction={updateTransaction}/>
      <TransactionContent transactions={transactions} deleteTransaction={deleteTransaction} selectTransaction={selectTransaction}/>
      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
