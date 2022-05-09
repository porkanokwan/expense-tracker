import Report from "./Report";
import FilterBar from "./FliterBar";
import Pagination from "./Pagination";

function TransactionContent() {
    return(
        <>
            <Report/>
            <FilterBar/>
            <Pagination/>
        </>
    )
}

export default TransactionContent;