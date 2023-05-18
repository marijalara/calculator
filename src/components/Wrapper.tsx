import React from 'react';

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
}

export default Wrapper