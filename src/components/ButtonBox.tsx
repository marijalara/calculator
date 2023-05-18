import React from 'react';

const ButtonBox: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className='buttonBox'>
            {children}
        </div>
    )
}

export default ButtonBox