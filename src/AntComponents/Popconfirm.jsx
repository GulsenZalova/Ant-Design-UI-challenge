import React from 'react'
import { message, Popconfirm } from 'antd';

function Confirm({text,title,description,operation}) {
    const confirm = () => {
        message.success('Click on Yes');
      };
      
      const cancel = () => {
        message.error('Click on No');
      };
  return (
    <Popconfirm
    title={title}
    description={description}
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    {text}
  </Popconfirm>
  )
}

export default Confirm
