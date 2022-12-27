import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import FormPage from './Form';
function ModalPage(props) {
  // let {id,orderdate,shipVia}=props

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
      <Button type="primary" onClick={showModal}>
        update
      </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Update">
           <FormPage item={props.updatedElement} update={props.setUpdateİnfo} setIsModalOpen={setIsModalOpen} />
        </Modal>
      </>
    )
}

export default ModalPage
