function App() {
  return (
    <div className="container mw-md">
      <div className="d-grid mt-3">
        <button className="btn btn-outline-warning">Create Transaction</button>
      </div>

      <div className="border bg-white rounded-2 p-3 mt-3">
        <form className="row g-3">
          <div className="col-12">
            <input
              type="radio"
              className="btn-check"
              id="cbx-expense"
              name="type"
              defaultChecked
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
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option>Food</option>
              <option>Shopping</option>
              <option>Transport</option>
              <option>Utilities</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Amount</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Comment</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="col-12">
            <div className="d-grid mt-3">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-sm-4">
          <div className="bg-info rounded-2 p-3">
            <p className="text-black-50">Net Worth</p>
            <h5 className="text-white">฿5,146.00</h5>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="bg-success rounded-2 p-3">
            <p className="text-black-50">Income</p>
            <h5 className="text-white">฿5,200.00</h5>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="bg-danger rounded-2 p-3">
            <p className="text-black-50">Expense</p>
            <h5 className="text-white">฿54.00</h5>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter to search"
              />
              <button className="btn btn-sm btn-outline-light">x</button>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <select className="form-select form-select-sm">
                <option value="">Month</option>
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
                <option value="">Aug</option>
                <option value="">Sep</option>
                <option value="">Oct</option>
                <option value="">Nov</option>
                <option value="">Dec</option>
              </select>
              <button className="btn btn-sm btn-outline-light">x</button>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <select className="form-select form-select-sm">
                <option value="">Year</option>
                <option value="">2021</option>
                <option value="">2020</option>
              </select>
              <button className="btn btn-sm btn-outline-light">x</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-between">
        <div className="d-flex align-items-center mb-3">
          <div>
            <select type="text" className="form-select form-select-sm">
              <option value="">10</option>
              <option value="">25</option>
              <option value="">50</option>
              <option value="">100</option>
            </select>
          </div>
          <span className="text-white-50 mx-2 fs-7">
            Showing 1 to 10 of 20 transactions
          </span>
        </div>
        <nav>
          <ul className="pagination pagination-sm">
            <li className="page-item disabled">
              <a href="/" className="page-link">
                <span>&laquo;</span>
              </a>
            </li>
            <li className="page-item active">
              <a href="/" className="page-link">
                <span>1</span>
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                <span>2</span>
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                <span>3</span>
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                <span>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-danger">
          <div className="transaction-detail d-flex flex-fill me-4">
            <div className="transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center">
              <p className="p-0 m-0 fs-7 text-black-50">Jan 21</p>
              <p className="p-0 m-0">21</p>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
              <div>
                <p className="mb-1 f-5 fw-bold">7-11</p>
                <p className="mb-0 text-black-50 fs-7">Food</p>
              </div>
              <span className="badge bg-danger">฿17.00</span>
            </div>
          </div>
          <button className="btn btn-link text-secondary p-0 border-0">
            <i className="bi-x-circle" />
          </button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-success">
          <div className="transaction-detail d-flex flex-fill me-4">
            <div className="transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center">
              <p className="p-0 m-0 fs-7 text-black-50">Dec 21</p>
              <p className="p-0 m-0">30</p>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
              <div>
                <p className="mb-1 f-5 fw-bold">Monster Inc. Company</p>
                <p className="mb-0 text-black-50 fs-7">Salary</p>
              </div>
              <span className="badge bg-success">฿5,200.00</span>
            </div>
          </div>
          <button className="btn btn-link text-secondary p-0 border-0">
            <i className="bi-x-circle" />
          </button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-danger">
          <div className="transaction-detail d-flex flex-fill me-4">
            <div className="transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center">
              <p className="p-0 m-0 fs-7 text-black-50">Dec 20</p>
              <p className="p-0 m-0">25</p>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
              <div>
                <p className="mb-1 f-5 fw-bold">BTS</p>
                <p className="mb-0 text-black-50 fs-7">Transport</p>
              </div>
              <span className="badge bg-danger">฿37.00</span>
            </div>
          </div>
          <button className="btn btn-link text-secondary p-0 border-0">
            <i className="bi-x-circle" />
          </button>
        </li>
      </ul>

      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
