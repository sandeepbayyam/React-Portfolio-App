import React from 'react';
import timelineElements from "./TimelineElements";
import { VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import { Container } from 'react-bootstrap';
import {MdSchool} from 'react-icons/md';


const Timeline = () => {
  return (
    <div>
      <Container>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              className="vertical-timeline-element"
              contentStyle={{ background: 'transparent', color: '#fff',width:'50%'}}
              contentArrowStyle={{ borderRight: '7px solid #20c997' }}
              iconStyle={{ background: '#20c997', color: '#fff' }}
              icon={<MdSchool/>}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h6 className="vertical-timeline-element-subtitle">
                {element.subtitle}
              </h6>
              <p className="vertical-timeline-element-subtitle">
                {element.location}
              </p>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Timeline
