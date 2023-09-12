import React, { useState } from "react";
import { Button, Modal } from "antd";
import NewForm from "./NewForm";

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Form
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[]}
      >
        <div>
          <NewForm />
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
