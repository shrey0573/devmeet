import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedItem !== null) {
      this.setState({
        event: this.props.selectedItem
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedItem !== nextProps.selectedItem) {
      this.setState({
        event: nextProps.selectedItem || emptyEvent
      });
    }
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else this.props.createEvent(this.state.event);
  };

  onDataChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { handleFormCancel } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.onDataChange}
              value={event.title}
              name="title"
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.onDataChange}
              value={event.date}
              name="date"
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.onDataChange}
              value={event.city}
              name="city"
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.onDataChange}
              value={event.venue}
              name="venue"
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              onChange={this.onDataChange}
              value={event.hostedBy}
              name="hostedBy"
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
