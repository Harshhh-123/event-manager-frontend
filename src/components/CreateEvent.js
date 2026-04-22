import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:8080/api/events';

function CreateEvent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title:'', date:'', type:'', description:'' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(API, form)
      .then(() => {
        setSuccess('Event created successfully!');
        setError('');
        setTimeout(() => navigate('/'), 1500);
      })
      .catch(err => {
        setError(err.response?.data?.message || 'Failed to create event');
        setSuccess('');
      });
  };

  return (
    <div style={styles.container}>
      <h2>Create New Event</h2>
      {success && <p style={{color:'green'}}>{success}</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="title" placeholder="Event Title" value={form.title} onChange={handleChange} style={styles.input} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} style={styles.input} required />
        <input name="type" placeholder="Event Type (e.g. Conference)" value={form.type} onChange={handleChange} style={styles.input} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} style={styles.textarea} required />
        <button type="submit" style={styles.btn}>Create Event</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth:'500px', margin:'0 auto' },
  form: { display:'flex', flexDirection:'column', gap:'15px' },
  input: { padding:'10px', fontSize:'16px', borderRadius:'4px', border:'1px solid #ddd' },
  textarea: { padding:'10px', fontSize:'16px', borderRadius:'4px', border:'1px solid #ddd', height:'100px' },
  btn: { backgroundColor:'#4f46e5', color:'white', padding:'12px', fontSize:'16px', border:'none', borderRadius:'4px', cursor:'pointer' }
};

export default CreateEvent;