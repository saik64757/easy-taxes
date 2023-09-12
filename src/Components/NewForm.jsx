import React from "react";
import { Checkbox, Space, Form, Input } from "antd";
import { useMultiStepForm } from "../Hooks/useMultiStepForm";
import Styles from "../App.module.css";
import From1 from "./From1";
import From2 from "./From2";

const NewForm = () => {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([<From1 />, <From2 />]);

  return (
    <>
      <Form name="sCorpForm" layout="vertical">
        <div style={{ position: "absolute", top: "1rem", right: "3rem" }}>
          {currentStepIndex + 1}/{steps.length}
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
            {!isLastStep && (
              <button type="button" onClick={next}>
                Next
              </button>
            )}
            {isLastStep && (
              <button type="submit" onClick={next}>
                Submit
              </button>
            )}
          </div>
        </div>
      </Form>
    </>
  );
};

export default NewForm;
