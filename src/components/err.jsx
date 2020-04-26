import React from 'react';
import Alert from "reactstrap/es/Alert";

function Err(props) {
    return (
        <div style={ { display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Alert color="danger">
                Внимание! Возникла ошибка при запросе данных!
            </Alert>
        </div>
    );
}

export default Err;