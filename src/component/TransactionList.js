import TransactionCard from "./TransactionCard";

function TransactionList() {
    return(
        <ul className="list-group">
            {/* ข้อมูลที่ transaction ส่งไปจะเอามาจาก backend อีกที */}
            <TransactionCard transaction={{ id, payee, category }}/>
            <TransactionCard/>
            <TransactionCard/>
        </ul>
    )
}

export default TransactionList;