import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useFroms } from "../Contest/FormContext";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Uploadinput = ({ disabled }) => {
  const { setuserDetails } = useFroms();

  props.onChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      setuserDetails((prev) => {
        return {
          ...prev,
          [info?.file?.name]: info?.file,
        };
      });
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Dragger {...props} disabled={disabled !== "yes" ? true : false}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Browse Files</p>
      <p className="ant-upload-hint">Drag and drop files here</p>
    </Dragger>
  );
};
export default Uploadinput;
