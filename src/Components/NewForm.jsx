import React from "react";
import { Form } from "antd";
import { useMultiStepForm } from "../Hooks/useMultiStepForm";
import Styles from "../App.module.css";
import From1 from "./From1";
import From2 from "./From2";
import { useFroms } from "../Contest/FormContext";

const NewForm = () => {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([<From1 />, <From2 />]);

  const { userDetails, setuserDetails, forms, setforms } = useFroms();

  function onFinish(e) {
    setforms((prev) => [...prev, userDetails]);
    setuserDetails({});
    next();
  }
  console.log(forms);
  return (
    <>
      <Form name="sCorpForm" layout="vertical" onFinish={onFinish}>
        <div style={{ position: "absolute", top: "1rem", right: "3rem" }}>
          Page {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className={Styles.pageButtons}>
          <div>
            {isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
          </div>
          <div className={Styles.savebutton}>
            <button type="button" onClick={back}>
              Save
            </button>
            {!isLastStep && <button type="submit">Next</button>}
            {isLastStep && <button type="submit">Submit</button>}
          </div>
        </div>
      </Form>
    </>
  );
};

export default NewForm;
