import React, { useState } from 'react'
import "../styles/index.css"
import Form from '../components/Form';

function Index() {
    const [showForm, setShowForm] = useState(false);
    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };
  return (
    <div>
        <div id='section-header' className='welcome-area'>
            <h1>OPT-IN</h1>
            <img src="" alt="" />
            <button className='Access-button' onClick={handleOpenForm}>Gain Access</button>
        </div>
        <main>
            Main
        </main>
        <div id='section-footer'>
            Foot
            <p>Footer</p>
        </div>
        <footer>
            <div className='container'>
            <p>&copy; 2024 Taloshili. All rights reserved.</p>
            </div>
        </footer>
        {showForm && <Form isVisible={showForm} onClose={handleCloseForm} />}
    </div>
  )
}

export default Index;