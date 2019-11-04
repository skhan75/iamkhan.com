import React, { Component } from 'react';
import Layout from "../../../hoc/layouts/layout";
import SectionTitle from "../../Widgets/sectionTitle";
import TrackVisibility from "react-on-screen";
import Progress from "../../Widgets/progress";
import SubTitle from "../../Widgets/subTitle";
import ResumeContainer from "../../../hoc/containers/resume";
import { resumeData } from "../../../data/resume";

const Resume = () => {
  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="My Skills" />

          <div className="mi-skills">
            <div className="row mt-30-reverse">
              { resumeData.skills.map(skill => (
                <TrackVisibility once className="col-md-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              )) }
            </div>
          </div>

        </div>
      </div>

      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Resume" />

          <SubTitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            { resumeData.workExperience.map(workingExp => (
              <ResumeContainer key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>

          <SubTitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            { resumeData.educationalExperience.map(workingExp => (
              <ResumeContainer key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Resume;
