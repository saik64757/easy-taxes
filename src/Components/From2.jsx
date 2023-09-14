import React, { useEffect, useState } from "react";
import { Form, Input, Typography, Radio, Space, Checkbox, Button } from "antd";
import Styles from "../App.module.css";
import Uploadinput from "./Uploadinput";
import { useFroms } from "../Contest/FormContext";

const { Title } = Typography;
const From2 = () => {
  const { userDetails, setuserDetails } = useFroms();
  const normFile = (e) => {
    // console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  function handleform2Change(e) {
    setuserDetails((prev) => {
      // Only Trinary

      if (e.target.name === "requiredDocs") {
        return {
          ...prev,
          [e.target.name]: prev?.requiredDocs
            ? prev?.requiredDocs.includes(e.target.value)
              ? prev?.requiredDocs.filter((value) => value !== e.target.value)
              : [...prev?.requiredDocs, e.target.value]
            : [e.target.value],
        };
      }

      if (e.target.name === "transaction") {
        if (prev?.transaction) {
          if (prev?.transaction.includes(e.target.value)) {
            return {
              ...prev,
              [e.target.name]: prev?.transaction.filter(
                (value) => value !== e.target.value
              ),
            };
          } else {
            return {
              ...prev,
              [e.target.name]: [...prev?.transaction, e.target.value],
            };
          }
        } else {
          return {
            ...prev,
            [e.target.name]: [e.target.value],
          };
        }
      }
    });
  }

  return (
    <div onChange={handleform2Change}>
      <Form.Item label="Was there any following transaction in 2022?">
        <Radio.Group>
          <Space direction="vertical">
            <Checkbox
              name="transaction"
              checked={userDetails?.transaction?.includes("Capital Infusion")}
              value={"Capital Infusion"}
            >
              Capital Infusion
            </Checkbox>
            <Checkbox
              name="transaction"
              checked={userDetails?.transaction?.includes("Capital Withdrawal")}
              value={"Capital Withdrawal"}
            >
              Capital Withdrawal
            </Checkbox>
            <Checkbox
              name="transaction"
              checked={userDetails?.transaction?.includes(
                "Related Party Transaction"
              )}
              value={"Related Party Transaction"}
            >
              Related Party Transaction
            </Checkbox>
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
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        ></Form.Item>
        <Uploadinput disabled="yes" />
      </Form.Item>
      <Form.Item label="Please Upload the following Documents:">
        <Radio.Group>
          <Space direction="vertical">
            <Checkbox
              name="requiredDocs"
              value={"Bank Statements"}
              checked={userDetails?.requiredDocs?.includes("Bank Statements")}
            >
              Bank Statements
            </Checkbox>
            <Checkbox
              name="requiredDocs"
              value={"Credit Card Statements"}
              checked={userDetails?.requiredDocs?.includes(
                "Credit Card Statements"
              )}
            >
              Credit Card Statements
            </Checkbox>
            <Checkbox
              name="requiredDocs"
              value={"Form 10991"}
              checked={userDetails?.requiredDocs?.includes("Form 10991")}
            >
              Form 10991
            </Checkbox>
            <Checkbox
              name="requiredDocs"
              value={"Form 940/941"}
              checked={userDetails?.requiredDocs?.includes("Form 940/941")}
            >
              Form 940/941
            </Checkbox>
            <Checkbox
              name="requiredDocs"
              value={"EIN Certificate"}
              checked={userDetails?.requiredDocs?.includes("EIN Certificate")}
            >
              EIN Certificate
            </Checkbox>
            <Checkbox
              name="requiredDocs"
              value={"IRS Acceptance Letter of S-Corp"}
              checked={userDetails?.requiredDocs?.includes(
                "IRS Acceptance Letter of S-Corp"
              )}
            >
              IRS Acceptance Letter of S-Corp
            </Checkbox>
            <Checkbox
              name="requiredDocs"
              value={`Financials(if prepared)`}
              checked={userDetails?.requiredDocs?.includes(
                `Financials(if prepared)`
              )}
            >{`Financials(if prepared)`}</Checkbox>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Upload the above Documents."
        name={"Upload the above Documents."}
      >
        <Form.Item
          valuePropName="fileList"
          name={"fileList"}
          getValueFromEvent={normFile}
          noStyle
        >
          <Uploadinput disabled="yes" />
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
