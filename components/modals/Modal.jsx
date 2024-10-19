export default function Modal(){

  const formGroup = [
    {
      text: "Bill From",
      forms: [
        {
          label: "Street Address",
          type: "text",
          placeholder: "Enter street address",
          className: "col-12"
        },
        {
          label: "City",
          type: "text",
          placeholder: "Enter city",
          className: "col-4"
        },
        {
          label: "Post Code",
          type: "text",
          placeholder: "Enter post code",
          className: "col-4"
        },
        {
          label: "Country",
          type: "text",
          placeholder: "Enter country",
          className: "col-4"
        }
      ]
    },
    {
      text: "Bill To",
      forms: [
        {
          label: "Client's Name",
          type: "text",
          placeholder: "Enter client's name",
          className: "full"
        },
        {
          label: "Client's Email",
          type: "email",
          placeholder: "Enter client's email",
          className: "full"
        },
        {
          label: "Street Address",
          type: "text",
          placeholder: "Enter street address",
          className: "full"
        },
        {
          label: "City",
          type: "text",
          placeholder: "Enter city",
          className: "col-4"
        },
        {
          label: "Post Code",
          type: "text",
          placeholder: "Enter post code",
          className: "col-4"
        },
        {
          label: "Country",
          type: "text",
          placeholder: "Enter country",
          className: "col-4"
        },
        {
          label: "Invoice Date",
          type: "date",
          placeholder: "Enter invoice date",
          className: "col-6"
        },
        {
          label: "Payment Terms",
          type: "select",
          options:["Next 30 Days", "Next 60 Days", "Next 90 Days"],
          placeholder: "Enter payment terms",
          className: "col-6"
        },
        {
          label: "Project Description",
          type: "text",
          placeholder: "Enter project description",
          className: "full"
        }
      ]
    },
    {
      title: "Item List",
      forms: [
        {
          label: "Item Name",
          type: "text",
          placeholder: "Enter item name",
          className: "col-5"
        },
        {
          label: "Qty.",
          type: "number",
          placeholder: "Enter quantity",
          className: "col-1"
        },
        {
          label: "Price",
          type: "number",
          placeholder: "Enter price",
          className: "col-2"
        },
        {
          label: "Total",
          type: "number",
          placeholder: "Enter total",
          className: "col-2"
        },
        {
          label: "Delete",
          type: "button",
          icon: "delete",
          className: "col-2"
        }
      ]
    }

  ]

  return(
    <div id="modal">
      <div className="header">
        <h2>Edit</h2>
      </div>
      <form action="">
        {formGroup.map((group, index) => (
          <div className="form-group" key={index}>
            <div className="title">{group.text}</div>
            { group.forms.map((form, index) => (
              <div className={`form ${form.className}`} key={index}>
                {form.type === "select" ? (
                  <select name={form.label} id={form.label} placeholder={form.placeholder}>
                    <option value="">{form.placeholder}</option>
                    {form.options.map((option, index) => (
                      <option value={option} key={index}>{option}</option>
                    ))}
                  </select>
                ) : (
                  form.type === "button" ? (
                    <button type="button" className="icon">
                      {form.icon === "delete" ? ( <img src="/icon-delete.svg" alt="delete" /> ) : null}
                    </button>
                  ) : (
                    <input type={form.type} name={form.label} id={form.label} placeholder={form.placeholder} />
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  )
}