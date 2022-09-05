// import React, { useRef, useState } from "react";
import React from "react";
// import ReactToPrint from "react-to-print";
import { Download } from "react-feather";
import Editor from "../Editor/Editor";
// import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
//   const resumeRef = useRef();

//  const [resumeInformation, setResumeInformation] = useState({
    // [sections.basicInfo]: {
    //   id: sections.basicInfo,
    //   sectionTitle: sections.basicInfo,
    //   detail: {},
    // },
    // [sections.workExp]: {
    //   id: sections.workExp,
    //   sectionTitle: sections.workExp,
    //   details: [],
    // },
    // [sections.project]: {
    //   id: sections.project,
    //   sectionTitle: sections.project,
    //   details: [],
    // },
    // [sections.education]: {
    //   id: sections.education,
    //   sectionTitle: sections.education,
    //   details: [],
    // },
    // [sections.achievement]: {
    //   id: sections.achievement,
    //   sectionTitle: sections.achievement,
    //   points: [],
    // },
    // [sections.summary]: {
    //   id: sections.summary,
    //   sectionTitle: sections.summary,
    //   detail: "",
    // },
    // [sections.other]: {
    //   id: sections.other,
    //   sectionTitle: sections.other,
    //   detail: "",
    // },
//   });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={styles.color}
            //   className={`${styles.color} ${
            //     activeColor === item ? styles.active : ""
            //   }`}
            //   onClick={() => setActiveColor(item)}
            />

            ))}
          
        </div>
        <button>
            Download <Download />
        </button>
        {/* <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <Download />
              </button>
            );
          }}
        //   content={() => resumeRef.current}
        /> */}
      </div>
      <div className={styles.main}>
        <Editor sections={sections} />
        {/* <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        /> */}
      </div>
    </div>
  );
}

export default Body;