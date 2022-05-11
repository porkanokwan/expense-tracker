import ReportCard from "./ReportCard";

function Report(props) {
    const {transactions} = props;

    // let sumIncome = 0;
    // const income = transactions.filter(item => item.category.type === 'INCOME');
    // console.log(income)
    // for(let item of income) {
    //     sumIncome += item.amount;
    // }
    // console.log(sumIncome)
    
    // let sumExpense = 0;
    // const expense = transactions.filter(item => item.category.type === 'EXPENSE');
    // console.log(expense)
    // for(let item of expense) {
    //     sumExpense += item.amount;
    // }
    // console.log(sumExpense);

    // เฉลย
    const [income, expense] = transactions.reduce( (prev, item) => {
        if(item.category.type === 'EXPENSE') {
            prev[1] += item.amount;
        } else {
            prev[0] += item.amount;
        }
        return prev; // เป็นค่าในรอบถัดไป
    }, [0, 0])

    return(
    <div className="row g-3 mt-2">
        {/* <ReportCard bg='info' title='Net worth' value={sumIncome - sumExpense}/>
        <ReportCard bg='success' title='Income' value={sumIncome}/>
        <ReportCard bg='danger' title='Expense' value={sumExpense}/> */}
        <ReportCard bg='info' title='Net worth' value={income - expense}/>
        <ReportCard bg='success' title='Income' value={income}/>
        <ReportCard bg='danger' title='Expense' value={expense}/>
    </div>
    )
}

export default Report;