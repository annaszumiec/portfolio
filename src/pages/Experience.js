import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#8f928a">
                <VerticalTimelineElement

                    contentStyle={{
                        background: '#F9F9F9', color: '#33343A'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #F9F9F9' }}
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
                    iconStyle={{ background: "#AEB4A1", color: "#33343A" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Careerfoundry
                    </h3>
                    <p> The Full-Stack Web Development Program </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement

                    contentStyle={{ background: '#F9F9F9', color: '#33343A' }}
                    contentArrowStyle={{ borderRight: '7px solid  #F9F9F9' }}
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{ background: "#AEB4A1", color: "#33343A" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Careerfoundry
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">

                    </h4>

                    <p> The UI Design Program </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement

                    contentStyle={{ background: '#F9F9F9', color: '#33343A' }}
                    contentArrowStyle={{ borderRight: '7px solid  #F9F9F9' }}
                    className="vertical-timeline-element--education"
                    date="2008-2011"
                    iconStyle={{ background: "#AEB4A1", color: "#33343A" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">

                        University of the Arts London / London College of Communication
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p> Graphic and Media Design </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    contentStyle={{
                        background: '#F9F9F9', color: '#33343A'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #F9F9F9' }}
                    className="vertical-timeline-element--work"
                    date="2022"
                    iconStyle={{ background: "#F9F9F9", color: "#33343A" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Q2web
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Designer
                    </h4>
                    <p> Reviewing existing interface design </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement

                    contentStyle={{
                        background: '#F9F9F9', color: '#33343A'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #F9F9F9' }}
                    className="vertical-timeline-element--work"
                    date="2016 - 2018"
                    iconStyle={{ background: "#F9F9F9", color: "#33343A" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        United Nation University
                        Institute for Environment and Human Security
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Project Consultant
                    </h4>
                    <p> E-Learnings, layouts, logos, promotional material, video recording and cutting </p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </div >
    );
}

export default Experience;