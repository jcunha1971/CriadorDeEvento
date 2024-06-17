import React, { useState, useEffect } from 'react';
import api from '../api';
import { TextField, Button, Box } from '@mui/material';

const EventForm = ({ event, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [organizer, setOrganizer] = useState('');

    useEffect(() => {
        if (event) {
            setTitle(event.title);
            setDescription(event.description);
            setDate(event.date);
            setLocation(event.location);
            setOrganizer(event.organizer);
        }
    }, [event]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = { title, description, date, location, organizer };
        try {
            if (event && event._id) {
                await api.put(`/events/${event._id}`, eventData);
            } else {
                await api.post('/events', eventData);
            }
            onSave();
        } catch (error) {
            console.error(error);
            alert('Error saving event');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                type="date"
                value={date.split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Organizer"
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                {event ? 'Update' : 'Create'} Event
            </Button>
        </Box>
    );
};

export default EventForm;
