import TransactionCard from "./TransactionCard";

function TransactionList(props) {
    const {transactions, deleteTransaction, selectTransaction} = props;
    console.log(transactions);
    return(
        <ul className="list-group">
            {/* ข้อมูลที่ transaction ส่งไปจะเอามาจาก backend อีกที */}
            {transactions.map(item => <TransactionCard key={item.id} item={item} deleteTransaction={deleteTransaction} selectTransaction={selectTransaction}/>)}
        </ul>
    )
}

export default TransactionList;