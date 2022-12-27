import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import Confirm from './Popconfirm'
import ModalPage from './ModalPage'


function AntTable() {
    const [products,setProducts]=useState([])
    const [updateInfo,setUpdateİnfo]=useState({customerId:"",orderDate:"",shipVia:""})
    const getProducts = () => {
        fetch('https://northwind.vercel.app/api/orders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }

    console.log(updateInfo)
    useEffect(()=>{
        getProducts()
    },[])

    const deleteOrder = (id) => {
        fetch(`https://northwind.vercel.app/api/orders/${id}`, { method: 'DELETE' })
            .then(res => {
                if (res.status == 200)
                    getProducts();
            })
    }

    useEffect(()=>{
        fetch(`https://northwind.vercel.app/api/orders/${updateInfo.id}`, 
        { method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify(updateInfo)
        })
            .then(res => {
                if (res.status == 200)
                    getProducts();
            })
    },[updateInfo])

    let columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key:"id"
            
        },
        {
            title: 'Name',
            dataIndex: 'customerId',
            key:"customerId",
            sorter: (a, b) => a.customerId.localeCompare(b.customerId),
        },
        {
            title: 'Order',
            dataIndex: 'orderDate',
            key:"orderDate",
            sorter:(a,b)=>  new Date(a.orderDate) > new Date(b.orderDate),
        },
        {
            title: 'ShipVia',
            dataIndex: 'shipVia',
            key:"shipVia",
            sorter:(a,b)=>a.shipVia>b.shipVia,
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            render: (id) => 
           <Button onClick={()=>deleteOrder(id)} danger><Confirm id={id} text="Delete" title="Delete the task" description="Are you sure to delete this task?"/></Button>
        },
        {
            title: 'Update',
            dataIndex: 'id',
            render: (id) => 
             <ModalPage updatedElement={products.find((x)=>x.id===id)} setUpdateİnfo={setUpdateİnfo}></ModalPage>
        }
    ]
  return (
  <>
   <Table
            dataSource={products}
            columns={columns}
            pagination={{ pageSize: 5 }}
        />
                

  </>
  )
}

export default AntTable
