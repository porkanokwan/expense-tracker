import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";

function TransactionAction({addTransaction, editTransaction, setEditTransaction, updateTransaction}) {
    const [isShowForm, setIsShowForm] = useState(false);

    const handleShowForm = () => {
        setIsShowForm(prev => !prev);
        // ถ้ากดใน card เพื่อ edit state editTransaction ต้องมีค่าเป็น obj แต่ถ้ากด Cancle Form จะหายและ editTransaction มีค่าเป็น null แต่ถ้ากด create Transaction ที่ไม่เกี่ยวกับ edit State editTransaction จะมีค่าเป็น null ก็จะไม่แสดงอะไร
        if(editTransaction){
            setEditTransaction(null);
        }
    }

    // ใช้ useEffect เพื่อป้องกันการเกิด infinite loop เนื่องจาก ถ้ามี editTransaction !== null เข้ามา จะทำให้เกิดการ setIsShowForm ใหม่ component จะ re-render อีกรอบวนไปแบบนี้
    useEffect( () => {
        if(editTransaction !== null) {
            setIsShowForm(true);
        }
    }, [editTransaction])

    return (
        <>
            <div className="d-grid mt-3">
                {/* setIsShowForm(prev => !prev) ใช้เป็น callback เพราะ ต้องอาศัยค่าเดิมของ state */}
                <button className="btn btn-outline-warning" onClick={handleShowForm}>{isShowForm ? 'Cancle' : 'Create Transaction'}</button>
                {isShowForm && <TransactionForm addTransaction={addTransaction} setIsShowForm={setIsShowForm} editTransaction={editTransaction} updateTransaction={updateTransaction}/>}
            </div>
        </>
    )
}

export default TransactionAction;