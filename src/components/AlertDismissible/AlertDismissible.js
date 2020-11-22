import {Alert , Button} from 'react-bootstrap';
import {useState} from 'react';
import   './AlertDismissible.css';
function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert className="Alert" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Please request grades for the folowing GCSE / Level qualifiactions:</Alert.Heading>
        </Alert>
      );
    }
    return show? <Button onClick={() => setShow(true)}>Show Alert</Button>: <span></span>;
  }

  export default AlertDismissible;