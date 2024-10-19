import './header.css';
export default function Header() {
  return(
    <>
      <div className="invoicesInfo">
        <h1>Invoices</h1>
        <p>There are <span>7</span> total invoices</p>
      </div>
      <div className="dropdown">
        <button>Filter by status</button>
        <div id="myDropdown" className="dropdown-content">
          <input type="checkbox" name="draft" />
          <label htmlFor="draft">Draft</label>
          <input type="checkbox" name="pending" />
          <label htmlFor="pending">Pending</label>
          <input type="checkbox" name="wait" />
          <label htmlFor="wait">Wait</label>
        </div>
      </div>
    </>
  )
}