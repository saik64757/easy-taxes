import React from "react";
import { useFroms } from "../Contest/FormContext";
import Styles from "./FormsList.module.css";

function FormsList() {
  const { forms } = useFroms();
  return (
    <div>
      {forms &&
        forms.map((form, idx) => (
          <ol key={idx} className={Styles.formListWrapper}>
            <li>
              Email : <span className={Styles.userInputs}>{form.email}</span>
            </li>
            <li>
              Filed Returns Last Year?:
              <span className={Styles.userInputs}>
                {form?.returnsLatsYear ? form?.returnsLatsYear : "No"}
              </span>
            </li>
            <li>
              Was the S-Corp incroporated in 2022?:
              <span className={Styles.userInputs}>
                {form?.incroporatedYear ? form?.incroporatedYear : "No"}
              </span>
            </li>
            <li>
              Was there any change in OwnerShip Structure in 2022?:
              <span className={Styles.userInputs}>
                {form?.ownerShipChange ? form?.ownerShipChange : "No"}
              </span>
            </li>
            <li>
              Was there any following transaction in 2022? :
              <span className={Styles.userInputs}>
                {form?.transaction ? "Yes" : "No"}
              </span>
              <ul>
                {form?.transaction.map((files) => (
                  <li>{files}</li>
                ))}
              </ul>
            </li>
            <li>
              Documents Uploaded :{" "}
              <span className={Styles.userInputs}>
                {form?.transaction ? "Yes" : "No"}
              </span>
              <ul>
                {form?.requiredDocs.map((files) => (
                  <li>{files}</li>
                ))}
              </ul>
            </li>
          </ol>
        ))}
    </div>
  );
}

export default FormsList;
