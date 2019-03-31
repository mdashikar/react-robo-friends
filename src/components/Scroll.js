import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '800px',scrollbarWidth: 'none' }}>
            {props.children}
        </div>
    );
}

export default Scroll;