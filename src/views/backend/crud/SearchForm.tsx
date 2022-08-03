import React from 'react'
import { Form, Row, Col, Input } from 'antd'

const SearchForm: React.FC = () => {
  return (
    <Form>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="第一个">
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="第二个">
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="第三个">
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchForm
