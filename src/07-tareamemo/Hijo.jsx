import React from 'react';

// eslint-disable-next-line react/prop-types, react/display-name
export const Hijo = React.memo(({ numero, incrementar }) => {
// ponemos el memo para memorizar el comportamiento de los botones 
    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
