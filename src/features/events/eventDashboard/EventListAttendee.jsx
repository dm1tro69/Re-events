import React from 'react'
import {Image, List} from "semantic-ui-react";

const EventListAttendee = ({attendees}) => {
return (
   <List.Item>
       <Image size={'mini'} circular src={attendees.photoURL}/>
   </List.Item>
)
}
export default EventListAttendee