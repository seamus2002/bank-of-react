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
        setPage(<Customize />)
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
