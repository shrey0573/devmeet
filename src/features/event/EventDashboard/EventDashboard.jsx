import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventItem = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      events: eventItem,
      isOpen: false
    };

    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  }

  handleFormOpen = () => {
    this.setState({
      selectedItem: null,
      isOpen: true
    });
  };
  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = (updatedEvent) =>{
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id){
           return Object.assign({}, updatedEvent)
        }
        else return event
      }),
      isOpen: false,
      selectedItem: null
    })
  }

  handleEditEvent = (eventToUpdate) => () =>{
    this.setState({
      selectedItem: eventToUpdate,
      isOpen: true
    })
  }

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "./assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId)
    this.setState({
      events: updatedEvents
    })
  }

  render() {
    const {selectedItem} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList onEventEdit={this.handleEditEvent}   deleteEvent={this.handleDeleteEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column className="rightgrid" width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            inverted
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm updateEvent={this.handleUpdateEvent} selectedItem={selectedItem}
              createEvent={this.handleCreateEvent}
              handleFormCancel={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
