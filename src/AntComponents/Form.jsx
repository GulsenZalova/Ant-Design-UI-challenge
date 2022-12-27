import React from 'react'
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
function FormPage(props) {
    console.log(props.item)
    const onFinish = (values) => {
        console.log('Success:', values);
        props.update({
            ...props.item,
            customerId: values.customerId,
            orderDate:new Date(),
            shipVia:values.shipVia
        })
        props.setIsModalOpen(false)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

      };
    
  return (
    <div>
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Customer ID"
        name="customerId"
        initialValue={props.item.customerId}
        rules={[{ required: true, message: 'Please input your customerId!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="OrderDate"
        name="orderDate"
        initialValue={props.item.orderDate}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ship Via"
        name="shipVia"
        initialValue={props.item.shipVia}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <InputNumber/>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default FormPage
