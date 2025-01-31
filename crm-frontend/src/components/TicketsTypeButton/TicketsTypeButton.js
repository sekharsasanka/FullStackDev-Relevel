import { Dropdown } from 'react-bootstrap';
import constants from '../../utils/constants';

function TicketsTypeButton(props){
    const { ticketsType} = constants;
    return(
        <Dropdown onSelect = {props.getTicketsAndUpdateCards} style = {{
            "text-align": "end",
            "width": "10rem",
        }}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {props.currentTicketsType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey = {ticketsType.AssignedToMe}>Assigned To Me</Dropdown.Item>
                <Dropdown.Item eventKey = {ticketsType.CreatedByMe}>Created By Me</Dropdown.Item>
                <Dropdown.Item eventKey = {ticketsType.All}>All Tickets</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default TicketsTypeButton;