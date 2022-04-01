import React from 'react';

const Customize = () => {
    const update = () => {
        let username = document.getElementById('username-textbox').value;
        if (username !== '') {
            document.getElementById("username").innerHTML = username;
        }
        let color = document.getElementById('color-textbox').value;
        if (color !== '') {
            document.body.style.backgroundColor = color;
        }
    }

    return (
        <div className="container">
            <form id="color-form">
                Username: <input type="text" name="username" id='username-textbox' /><br />
                Color: <input type="text" name="color" id='color-textbox' /><br />
            </form>
            <button className='btn btn-outline-primary' onClick={update}>Update</button>
        </div>
    );
}

export default Customize;
