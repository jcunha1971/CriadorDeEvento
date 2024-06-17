import React, { useState, useEffect } from 'react';
import api from '../api';
import EventForm from './EventForm';
import { Container, List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const fetchEvents = async () => {
        const response = await api.get('/events');
        setEvents(response.data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleSave = () => {
        setSelectedEvent(null);
        fetchEvents();
    };

    const handleEdit = (event) => {
        setSelectedEvent(event);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/events/${id}`);
            setEvents(events.filter(event => event._id !== id));
        } catch (error) {
            console.error(error);
            alert('Error deleting event');
        }
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Event List
            </Typography>
            <List>
                {events.map(event => (
                    <ListItem key={event._id} divider>
                        <ListItemText primary={event.title} />
                        <Button variant="contained" color="primary" onClick={() => handleEdit(event)}>
                            Edit
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(event._id)}>
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
            <Box mt={4}>
                {selectedEvent ? <EventForm event={selectedEvent} onSave={handleSave} /> : <EventForm onSave={handleSave} />}
            </Box>
        </Container>
    );
};

export default EventList;
