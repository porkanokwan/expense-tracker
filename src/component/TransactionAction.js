import TransactionForm from "./TransactionForm";

function TransactionAction() {
    return (
        <>
            <div className="d-grid mt-3">
                <button className="btn btn-outline-warning">Create Transaction</button>
                <TransactionForm/>
            </div>
        </>
    )
}

export default TransactionAction;