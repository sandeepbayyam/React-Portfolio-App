import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import Timeline from './Timeline/Timeline.js';

const Education = () => {
  return (
    <div>
      <Container>
      <h1 className='text-white text-center'>Education</h1>
     <Timeline/>
  </Container>
    </div>
  )
}

export default Education
