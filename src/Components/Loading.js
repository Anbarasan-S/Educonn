import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",verticalAlign:"middle",alignItems:"center",marginTop:"20rem"}}><Spinner animation="grow" variant="success"></Spinner>
    <Spinner animation="grow" variant="success"></Spinner>
    <Spinner animation="grow" variant="success"></Spinner>
     </div>
  );
}

export default Loading