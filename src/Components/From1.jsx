import React from "react";
import { Form, Input, Typography, Radio, Space, Upload } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
const { Title } = Typography;

const From1 = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Form.Item
        label="Email"
        name="email"
        style={{ width: "60%", height: 90, margin: 0 }}
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input placeholder="Select a option and change input text above" />
      </Form.Item>
      <Form.Item label="Did You File the returns last year?">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="yes"> Yes </Radio>
            <Radio value="no"> No </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="File Upload">
        <Form.Item
          name="returnsLastYear"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
          rules={[
            {
              required: true,
              message: "Upload Files",
            },
          ]}
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Browse Files</p>
            <p className="ant-upload-hint">Drag and Drop Files</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Was the S-Corp incroporated in 2022?">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="yes"> Yes </Radio>
            <Radio value="no"> No </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Please Upload the Incorporation Documents">
        <Form.Item
          name="returnsLastYear"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
          rules={[
            {
              required: true,
              message: "Please Upload Incorporation Documents to continue",
            },
          ]}
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Browse Files</p>
            <p className="ant-upload-hint">Drag and Drop Files</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Was there any change in OwnerShip Structure in 2022?">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="yes"> Yes </Radio>
            <Radio value="no"> No </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Upload Latest Shareholding pattren."
        rules={[
          {
            required: true,
            message: "Please Upload Documents to continue",
          },
        ]}
      >
        <Form.Item
          name="returnsLastYear"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Browse Files</p>
            <p className="ant-upload-hint">Drag and Drop Files</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </div>
  );
};

export default From1;
