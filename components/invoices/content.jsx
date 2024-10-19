export default function Content() {
  const data = [
    {
      invoiceNo: 'RT3080',
      createdAt: '19 Aug 2021',
      fullName: 'Jesen Huang',
      price: '1,800.90',
      status: 'paid',
    },
    {
      invoiceNo: 'XM9141',
      createdAt: '20 Sep 2021',
      fullName: 'Alex Grim',
      price: '556',
      status: 'pending',
    },
    {
      invoiceNo: 'FV2353',
      createdAt: '12 Nov 2021',
      fullName: 'Anita Wainwright',
      price: '3,102.04',
      status: 'draft',
    }
  ];

  return(
    <>
      <ul>
        {data.map((invoice) => (
          <li key={invoice.invoiceNo}>
            <p>{invoice.invoiceNo}</p>
            <p>{invoice.createdAt}</p>
            <p>{invoice.fullName}</p>
            <p>{invoice.price}</p>
            <p>{invoice.status}</p>
          </li>
        ))}
      </ul>
    </>
  )
}