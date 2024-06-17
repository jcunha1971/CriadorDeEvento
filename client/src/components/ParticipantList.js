import React, { useState, useEffect } from 'react';
import api from '../api';

const ParticipantList = ({ eventId }) => {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchParticipants = async () => {
            const response = await api.get(`/participants/${eventId}`);
            setParticipants(response.data);
        };
        fetchParticipants();
    }, [eventId]);

    return (
        <div>
            <h2>Participants</h2>
            <ul>
                {participants.map(participant => (
                    <li key={participant._id}>{participant.userId.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipantList;
