import React from 'react'

export const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, Your entries count is...`}
            </div>
            <div className='f1 white'>
                {entries}
            </div>
        </div>
    );
}
export default Rank;
