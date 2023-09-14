import { Radio, Space } from "antd";

function RadioGroup({ name, userDetails }) {
  return (
    <Radio.Group name={name} value={userDetails?.[name]}>
      <Space direction="vertical">
        <Radio value={"yes"} checked>
          Yes
        </Radio>
        <Radio value={"no"}>No</Radio>
      </Space>
    </Radio.Group>
  );
}

export default RadioGroup;
