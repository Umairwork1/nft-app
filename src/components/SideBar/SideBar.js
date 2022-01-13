import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { Formik } from "formik";
import * as yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/fontawesome-free-solid";


const SideBar = (props) => {
  const [isActive, setActive] = useState(true);

  const handleDropDown = () => {
    setActive(!isActive);
    props.getNav(isActive);
  };

  let schema = yup.object().shape({
    max_value: yup.number().required(),
    min_value: yup.number().required(),
  });
  return (
    <>
      <div
        className={`${styles.sidebar} ${
          isActive ? styles.active : styles.inActive
        }`}
      >
        <span className={styles.btn_nav} onClick={() => setActive((prev) => !prev)}>
          {isActive ? (
            <FontAwesomeIcon icon={faArrowLeft} />
          ) : (
            <FontAwesomeIcon icon={faArrowRight} />
          )}
        </span>

        {isActive ? (
          <>
            <button onClick={handleDropDown} className={`${styles.btn}`}>
              <span>
                {" "}
                <FontAwesomeIcon icon={faBars} /> Filter
              </span>
              
            </button>

            <Formik
              initialValues={{}}
              validationSchema={schema}
              onSubmit={(values) => {
                props.getChild(values);
              }}
            >
              {({ handleSubmit, handleChange, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className={`${styles.wraper}`}>
                    <div className={`${styles.input_container}`}>
                      <div>
                        <input
                          type="number"
                          name="min_value"
                          placeholder="Min"
                          value={values.min_value}
                          onChange={handleChange}
                        />
                      </div>
                      <span style={{ textAlign: "center" }}>to</span>
                      <div>
                        <input
                          type="number"
                          name="max_value"
                          placeholder="Max"
                          value={values.max_value}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Apply"
                        className={`${styles.submit}`}
                      />
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </>
        ) : null}
      </div>
      <button
        className={styles.btn_filter}
        onClick={() => setActive((prev) => !prev)}
      >
        Filter
      </button>
    </>
  );
};

export default SideBar;
