import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

function QRScanner () {
    const [result, setResult] = useState('');

    const handleScan = data => {
        if (data) {
            setResult(data);
        } else {
            console.log('No Data');
        }
    }

    const handleError = err => {
        console.log(err);
    }

    return (
        <div>
            <QrReader 
                delay={300}
                onError={() => handleError}
                onScan={() => handleScan}
                style={{width: '100%'}}
            />
            <p>{result}</p>
        </div>
    )
}

export default QRScanner;