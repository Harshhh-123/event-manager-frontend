import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import EventDetail from './components/EventDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          <h2 style={styles.logo}>🎉 EventManager</h2>
          <div>
            <Link to="/" style={styles.link}>All Events</Link>
            <Link to="/create" style={styles.link}>Create Event</Link>
          </div>
        </nav>
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/events/:id" element={<EventDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  nav: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 30px', backgroundColor:'#4f46e5', color:'white' },
  logo: { margin:0, color:'white' },
  link: { color:'white', marginLeft:'20px', textDecoration:'none', fontWeight:'bold' },
  container: { padding:'20px' }
};

export default App;