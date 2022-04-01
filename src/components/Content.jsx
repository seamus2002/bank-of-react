import React, { useState } from 'react';
import Debits from './Debits';
import Credits from './Credits';

const Content = () => {
    const [page, setPage] = useState(<Debits />);

    const showDebits = () => {
        setPage(<Debits />);
    }

    const showCredits = () => {
        setPage(<Credits />)
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={showDebits}>Debits</button>
            <button className='btn btn-primary' onClick={showCredits}>Credits</button>
            {page}
        </div>
    );
}

export default Content;
