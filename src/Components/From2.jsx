import React from "react";
import {
  Form,
  Input,
  Typography,
  Radio,
  Space,
  Upload,
  Checkbox,
  Button,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import Styles from "../App.module.css";

const { Title } = Typography;
const { Search } = Input;
const From2 = () => {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div>
      <Form.Item label="Was there any following transaction in 2022?">
        <Radio.Group>
          <Space direction="vertical">
            <Checkbox>Capital Infusion</Checkbox>
            <Checkbox>Capital Withdrawal</Checkbox>
            <Checkbox>Related Party Transaction</Checkbox>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Upload Documents for the same:"
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
      <Form.Item label="Please Upload the following Documents:">
        <Radio.Group>
          <Space direction="vertical">
            <Checkbox>Bank Statements</Checkbox>
            <Checkbox>Credit Card Statements</Checkbox>
            <Checkbox>Form 10991</Checkbox>
            <Checkbox>Form 940/941</Checkbox>
            <Checkbox>EIN Certificate</Checkbox>
            <Checkbox>IRS Acceptance Letter of S-Corp</Checkbox>
            <Checkbox>{`Financials(if prepared)`}</Checkbox>
          </Space>
        </Radio.Group>
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
      <Title level={4}>
        Please complete the payment. We will prepare the draft tax return within
        48 hours!
      </Title>
      <div className={Styles.PaymentWrapper}>
        <div className={Styles.LogoWrapper}>
          <Checkbox checked={true}>
            <img
              src={require("../Assets/eazytaxes-Logo.jpeg")}
              alt="eazytaxes-Logo"
              width="75px"
              height="75px"
            />
          </Checkbox>
          <Title level={2}>Eazy Taxes</Title>
        </div>
        <div style={{ fontSize: "20px" }}>{`$349.00`}</div>
      </div>

      <div className={Styles.PaymentWrapper}>
        <div className={Styles.CouponWrapper}>
          <Title level={4}>Enter Coupon</Title>
          <Space.Compact style={{ width: "100%" }}>
            <Input placeholder="Enter Coupon Code" />
            <Button type="primary">Apply</Button>
          </Space.Compact>
        </div>
        <div className={Styles.TotalamountWrapper}>
          <p>Total</p>
          <p>{`$0.00`}</p>
        </div>
      </div>
    </div>
  );
};

export default From2;
