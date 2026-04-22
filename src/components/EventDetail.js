import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:8080/api/events';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [form, setForm] = useState({ name:'', email:'' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get(`${API}/${id}`)
      .then(res => setEvent(res.data))
      .catch(() => setError('Event not found'));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = e => {
    e.preventDefault();
    axios.post(`${API}/${id}/register`, form)
      .then(() => {
        setSuccess('Registered successfully!');
        setError('');
        setForm({ name:'', email:'' });
      })
      .catch(err => {
        setError(err.response?.data?.error || 'Registration failed');
        setSuccess('');
      });
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{event.title}</h2>
        <p><b>Type:</b> {event.type}</p>
        <p><b>Date:</b> {event.date}</p>
        <p><b>Description:</b> {event.description}</p>
      </div>

      <div style={styles.registerBox}>
        <h3>Register for this Event</h3>
        {success && <p style={{color:'green'}}>{success}</p>}
        {error && <p style={{color:'red'}}>{error}</p>}
        <form onSubmit={handleRegister} style={styles.form}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} style={styles.input} required />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} style={styles.input} required />
          <button type="submit" style={styles.btn}>Register Now</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth:'600px', margin:'0 auto' },
  card: { border:'1px solid #ddd', borderRadius:'8px', padding:'20px', marginBottom:'20px', boxShadow:'2px 2px 8px rgba(0,0,0,0.1)' },
  registerBox: { border:'1px solid #4f46e5', borderRadius:'8px', padding:'20px' },
  form: { display:'flex', flexDirection:'column', gap:'15px' },
  input: { padding:'10px', fontSize:'16px', borderRadius:'4px', border:'1px solid #ddd' },
  btn: { backgroundColor:'#4f46e5', color:'white', padding:'12px', fontSize:'16px', border:'none', borderRadius:'4px', cursor:'pointer' }
};

export default EventDetail;