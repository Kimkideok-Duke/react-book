import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookSeat() {
    const nave = useNavigate();



    return (
        <Table border={true}>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </Table>
    );
}

export default BookSeat;