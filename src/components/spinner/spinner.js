import React, { useState } from 'react';
import DotLoader from 'react-spinners/DotLoader';

const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Spinner = () => {

    const [color, setColor] = useState('#0773F1');
    const [loading, setLoading] = useState(true)


     return(
        <DotLoader color={color} css={override} loading={loading}/>
     )
}

export default Spinner;