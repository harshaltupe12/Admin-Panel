import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 112359,
            product: "Acer Nitro 5",
            img: "https://images.jdmagicbox.com/quickquotes/images_main/acer-nitro-5-gaming-laptop-intel-core-i7-11th-gen-8-gb-1-tb-ssd-nvidia-gtx-1650-windows-10-home-144hz-an515-with-39-6-cm-15-6-inches-fhd-display-2023307884-dxjniuje.png",
            customer: "Mayur Kosandar",
            date: '1 March',
            amount: 7659,
            method: "Cash on Delivery",
            status:"Pending",
        },

        {
            id: 125659,
            product: "HP Pvallion Gaming",
            img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51DmOWr3rnL._AC_UF1000,1000_QL80_.jpg",
            customer: "Harshal Tupe",
            date: '1 March',
            amount: 7659,
            method: "Credit Card",
            status:"Approved",
        },

        {
            id: 145328,
            product: "RealMe 11 Pro+",
            img: "https://cdn1.smartprix.com/rx-iv1VKz5qI-w420-h420/realme-11-pro-plus-1.jpg",
            customer: "Kaushik Patil",
            date: '1 March',
            amount: 7659,
            method: "Cash on Delivery",
            status:"Pending",
        },

        {
            id: 784536,
            product: "Iqoo Z7 pro",
            img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Id6WJDWqL._AC_UF894,1000_QL80_.jpg",
            customer: "Jay Patil",
            date: '1 March',
            amount: 7659,
            method: "Debit card",
            status:"Approved",
        },

        {
            id: 908712,
            product: "Vivo T2 Pro",
            img: "https://d2xamzlzrdbdbn.cloudfront.net/products/963edad0-9f38-4d3c-9bcc-1293cc6b48ad23180605_416x416.jpg",
            customer: "Arya Singasane",
            date: '1 March',
            amount: 7659,
            method: "EMI",
            status:"Approved",
        },
    ]
  return (
    <TableContainer component={Paper} className='table'>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image'/>
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default List