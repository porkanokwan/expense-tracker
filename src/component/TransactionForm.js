import axios from "axios";
import validator from "validator";
import { useEffect, useState } from "react";

function TransactionForm(props) {
  // form นี้มี input ทั้งหมด 6 ตัว จะตั้ง state 6 ตัว หรือ state 1 ตัว แต่ค่า defaut เป็น obj ที่มี key-value 6 ชุด
  const [input, setInput] = useState({
    type: "EXPENSE",
    payee: "",
    categoryId: "",
    amount: "",
    date: "",
    comment: "",
  });
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  // const [valid, setValid] = useState(false);
  const [error, setError] = useState({});
  const { addTransaction, setIsShowForm, editTransaction, updateTransaction } = props;

  useEffect(() => {
    axios.get("http://localhost:8080/categories").then((res) => {
      // การตั้งค่า default ของ categoryId ใน useEffect คือ render ครั้งแรกค่าใน categoryId จะเป็น id ของ newExpense ตำแหน่งที่ 0
      const newExpense = res.data.categories.filter(
        (categoryId) => categoryId.type === "EXPENSE"
      );
      setExpense(newExpense);
      setIncome(
        res.data.categories.filter((categoryId) => categoryId.type === "INCOME")
      );
      if (!editTransaction) {
        setInput((prev) => ({ ...prev, categoryId: newExpense[0].id })); // ใช้ newExpense เพราะ state expense ยังไม่ได้อัพเดททันที จึงไม่สามารถเอา expense มาใช้ได้
      }
    });
  }, []);

  useEffect(() => {
    if (editTransaction) {
      setInput({
        type: editTransaction.category.type,
        payee: editTransaction.payee,
        categoryId: editTransaction.category.id,
        amount: editTransaction.amount,
        date: editTransaction.date.slice(0, 10),
        comment: editTransaction.comment,
      });
    }
  }, [editTransaction]);

  const handleChangeInput = (e) => {
    const value = e.target.name === 'amount' ? +e.target.value : e.target.value ;
    // state ใหม่ต้องใช้ค่า state เดิม เลยต้องเขียนแบบ callback
    setInput((prev) => ({ ...prev, [e.target.name]: value }));
    // การตั้งค่า default เวลากดปุ่ม EXPENSE กับ INCOME ถ้ากดจาก expense ไป income categoryId จะมีค่าเริ่มต้นเป็น id ที่ตำแหน่งที่ 0 ใน array income
    if (e.target.name === "type") {
      setInput((prev) => ({
        ...prev,
        categoryId: value === "EXPENSE" ? expense[0].id : income[0].id,
      }));
    }
  };

  const option =
    input.type === "EXPENSE"
      ? expense.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))
      : income.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ));

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValid( validator.isEmpty(input.payee) );
    // setValid( validator.isEmpty(input.amount) );

    if (validator.isEmpty(input.payee)) {
      setError((prev) => ({ ...prev, payee: "Payee is required" }));
    } else {
      setError((prev) => ({ ...prev, payee: "" }));
    }

    if (validator.isEmpty(input.amount.toString())) {
      setError((prev) => ({ ...prev, amount: "Amount is required" }));
    } else if (!validator.isDecimal(input.amount.toString()) || input.amount <= 0) {
      setError((prev) => ({
        ...prev,
        amount: "Amount must be numeric and greater than zero",
      }));
    } else {
      setError((prev) => ({ ...prev, amount: "" }));
    }

    if (validator.isEmpty(input.date)) {
      setError((prev) => ({ ...prev, date: "Date is required" }));
    } else {
      setError((prev) => ({ ...prev, date: "" }));
    }

    if(!editTransaction) {
      addTransaction(input);
    } else {
      updateTransaction(editTransaction.id, input)
    }
    
    setIsShowForm(false);
  };

  return (
    <div className="border bg-white rounded-2 p-3 mt-3">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <input
            type="radio"
            className="btn-check"
            id="cbx-expense"
            name="type"
            checked = {input.type === 'EXPENSE'}
            value="EXPENSE"
            onChange={handleChangeInput}
          />
          <label
            className="btn btn-outline-danger rounded-0 rounded-start"
            htmlFor="cbx-expense"
          >
            Expense
          </label>
          <input
            type="radio"
            className="btn-check"
            id="cbx-income"
            name="type"
            value="INCOME"
            checked = {input.type === 'INCOME'}
            onChange={handleChangeInput}
          />
          <label
            className="btn btn-outline-success rounded-0 rounded-end"
            htmlFor="cbx-income"
          >
            Income
          </label>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          {/* <input type="text" className={`form-control ${valid && 'is-invalid'}`} name="payee" value={input.payee} onChange={handleChangeInput}/> */}
          <input
            type="text"
            className={`form-control ${error.payee && "is-invalid"}`}
            name="payee"
            value={input.payee}
            onChange={handleChangeInput}
          />
          {/* {valid && <p className="text-danger">Payee is required</p>} */}
          {<div className="invalid-feedback">{error.payee}</div>}
        </div>
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={input.categoryId}
            name="categoryId"
            onChange={handleChangeInput}
          >
            {option}
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          {/* <input type="text" className={`form-control ${valid && 'is-invalid'}`} name="amount" onChange={handleChangeInput}/> */}
          <input
            type="text"
            className={`form-control ${error.amount && "is-invalid"}`}
            name="amount"
            onChange={handleChangeInput}
            value={input.amount}
          />
          {/* {valid && <p className="text-danger">Amount is required</p>} */}
          {<div className="invalid-feedback">{error.amount}</div>}
        </div>
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className={`form-control ${error.amount && "is-invalid"}`}
            name="date"
            onChange={handleChangeInput}
            value={input.date}
          />
          {<div className="invalid-feedback">{error.date}</div>}
        </div>
        <div className="col-12">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            rows="3"
            name="comment"
            onChange={handleChangeInput}
            value={input.comment}
          ></textarea>
        </div>
        <div className="col-12">
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
