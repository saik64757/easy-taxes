import React from "react";
import { Form, Input, Typography, Radio, Space, Upload } from "antd";
import { useFroms } from "../Contest/FormContext";
import Uploadinput from "./Uploadinput";
import RadioGroup from "./RadioGroup";

const From1 = () => {
  const { userDetails, setuserDetails } = useFroms();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    setuserDetails((prev) => {
      return {
        ...prev,
        [e?.fileList[0]?.name]: e?.fileList,
      };
    });
  };

  function handleform1Change(e) {
    setuserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div onChange={handleform1Change}>
      <Form.Item
        name="email"
        label="E-mail"
        style={{ width: "60%", height: 90, margin: 0 }}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          placeholder="example@example.com"
          name="email"
          value={userDetails?.email}
        />
      </Form.Item>
      <Form.Item label="Did You File the returns last year?">
        <RadioGroup name={"returnsLatsYear"} userDetails={userDetails} />
      </Form.Item>
      <Form.Item
        label="File Upload"
        name={"File Upload"}
        rules={[
          {
            required: userDetails?.returnsLatsYear === "yes" ? true : false,
            message: "Upload Files",
          },
        ]}
      >
        <Form.Item
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Uploadinput
            filename="LastYearReturnsFiles"
            disabled={userDetails?.returnsLatsYear}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Was the S-Corp incroporated in 2022?">
        <RadioGroup name={"incroporatedYear"} userDetails={userDetails} />
      </Form.Item>
      <Form.Item
        label="Please Upload the Incorporation Documents"
        name={"Please Upload the Incorporation Documents"}
        rules={[
          {
            required: userDetails?.incroporatedYear === "yes" ? true : false,
            message: "Please Upload Incorporation Documents to continue",
          },
        ]}
      >
        <Form.Item
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Uploadinput disabled={userDetails?.incroporatedYear} />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Was there any change in OwnerShip Structure in 2022?">
        <RadioGroup name={"ownerShipChange"} userDetails={userDetails} />
      </Form.Item>
      <Form.Item
        label="Upload Latest Shareholding pattren."
        name={"Upload Latest Shareholding pattren."}
        rules={[
          {
            required: userDetails?.ownerShipChange === "yes" ? true : false,
            message: "Please Upload Incorporation Documents to continue",
          },
        ]}
      >
        <Form.Item
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Uploadinput disabled={userDetails?.ownerShipChange} />
        </Form.Item>
      </Form.Item>
    </div>
  );
};

export default From1;
