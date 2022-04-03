import React, { useState } from 'react';
import Debits from './Debits';
import Credits from './Credits';
import Customize from './Customize';

const Content = () => {
    const [page, setPage] = useState(<Debits />);

    const showDebits = () => {
        setPage(<Debits />);
    }

    const showCredits = () => {
        setPage(<Credits />)
    }

    const showCustomizeProfile = () => {
        setPage('Customize')
    }

    const update = () => {
        let username = document.getElementById('username-textbox').value;
        if (username !== '') {
            document.getElementById("username").innerHTML = username;
        }
        let color = document.getElementById('color-textbox').value;
        if (color !== '') {
            document.body.style.backgroundColor = color;
        }
        setPage(<Debits />)
    }

    if (page === 'Customize') {
        return (
            <div className="container">
                <button className='btn btn-primary' onClick={showDebits}>Debits</button>
                <button className='btn btn-primary' onClick={showCredits}>Credits</button>
                <button className='btn btn-primary' onClick={showCustomizeProfile}>Customize</button>
                <h1>Customize</h1>
                <br />
                <form id="color-form">
                    Username: <input type="text" name="username" id='username-textbox' /><br />
                    Color: <input type="text" name="color" id='color-textbox' /><br />
                </form>
                <button className='btn btn-outline-primary' onClick={update}>Update</button>
            </div>
        );
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={showDebits}>Debits</button>
            <button className='btn btn-primary' onClick={showCredits}>Credits</button>
            <button className='btn btn-primary' onClick={showCustomizeProfile}>Customize</button>
            {page}
        </div>
    );
}

export default Content;
