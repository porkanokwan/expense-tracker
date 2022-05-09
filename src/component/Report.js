import ReportCard from "./ReportCard";

function Report() {
    return(
    <div className="row g-3 mt-2">
        <ReportCard bg='info' title='Net worth' value='5,146.00'/>
        <ReportCard bg='success' title='Income' value='5,200.00'/>
        <ReportCard bg='danger' title='Expense' value='54.00'/>
    </div>
    )
}

export default Report;