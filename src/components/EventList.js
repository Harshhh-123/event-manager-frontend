import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:8080/api/events';

function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(API)
      .then(res => setEvents(res.data))
      .catch(() => setError('Failed to load events'));
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      {error && <p style={{color:'red'}}>{error}</p>}
      {events.length === 0 && <p>No events found. Create one!</p>}
      <div style={styles.grid}>
        {events.map(event => (
          <div key={event.id} style={styles.card}>
            <h3>{event.title}</h3>
            <p><b>Type:</b> {event.type}</p>
            <p><b>Date:</b> {event.date}</p>
            <p>{event.description}</p>
            <Link to={`/events/${event.id}`} style={styles.btn}>View & Register</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: { display:'flex', flexWrap:'wrap', gap:'20px' },
  card: { border:'1px solid #ddd', borderRadius:'8px', padding:'20px', width:'280px', boxShadow:'2px 2px 8px rgba(0,0,0,0.1)' },
  btn: { backgroundColor:'#4f46e5', color:'white', padding:'8px 16px', borderRadius:'4px', textDecoration:'none', display:'inline-block', marginTop:'10px' }
};

export default EventList;