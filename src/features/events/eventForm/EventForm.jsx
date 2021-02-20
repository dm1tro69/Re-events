import React, {useState} from 'react'
import {Button, Form, Header, Segment} from "semantic-ui-react";

const EventForm = ({setFormOpen, setEvents}) => {

    const initialValues = {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [values, setValues] = useState(initialValues)

    const handleFormSubmit = () => {
        console.log(values)
    }
    const handleInputChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }

return (
    <Segment clearing>
        <Header content={'Create new event'}/>
        <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <input
                    value={values.title}
                    onChange={(e)=> handleInputChange(e)}
                    name={'title'}
                    type="text"
                    placeholder={'Event title'}/>
            </Form.Field>
            <Form.Field>
                <input
                    value={values.category}
                    onChange={(e)=> handleInputChange(e)}

                    name={'category'}
                    type="text"
                    placeholder={'Category'}/>
            </Form.Field>
            <Form.Field>
                <input
                    value={values.description}
                    onChange={(e)=> handleInputChange(e)}

                    name={'description'}
                    type="text"
                    placeholder={'Description'}/>
            </Form.Field>
            <Form.Field>
                <input
                    value={values.city}
                    onChange={(e)=> handleInputChange(e)}

                    name={'city'}
                    type="text"
                    placeholder={'City'}/>
            </Form.Field>
            <Form.Field>
                <input
                    value={values.venue}
                    onChange={(e)=> handleInputChange(e)}

                    name={'venue'}
                    type="text"
                    placeholder={'Venue'}/>
            </Form.Field>
            <Form.Field>
                <input
                    value={values.date}
                    onChange={(e)=> handleInputChange(e)}

                    name={'date'}
                    type="date"
                    placeholder={'Date'}/>
            </Form.Field>
            <Button type={'submit'} floated={'right'} positive content={'Submit'}/>
            <Button onClick={()=>setFormOpen(false)} type={'submit'} floated={'right'}  content={'Cancel'}/>
        </Form>
    </Segment>
)
}
export default EventForm