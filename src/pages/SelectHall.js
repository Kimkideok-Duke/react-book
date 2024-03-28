import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SelectHall.css"

function SelectHall() {
    const navigate = useNavigate();

    const BookSeat = ({ Hall }) => {
        navigate("/BookSeat");
    }

    return (
        <div>
            <div className="imgDiv">
                <img className="img" src="./Dune2.png" />
            </div>
            <form>
                <Table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>시간</td>
                            <td>잔여석</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1관</td>
                            <td>13:30~15:30</td>
                            <td>30/30</td>
                            <td><button className="bookbutton" onClick={BookSeat}>선택</button></td>
                        </tr>
                        <tr>
                            <td>3관</td>
                            <td>09:30~11:30</td>
                            <td>30/30</td>
                            <td><button className="bookbutton" onClick={BookSeat}>선택</button></td>
                        </tr>
                        <tr>
                            <td>5관</td>
                            <td>21:30~23:30</td>
                            <td>30/30</td>
                            <td><button className="bookbutton" onClick={BookSeat}>선택</button></td>
                        </tr>
                    </tbody>
                </Table>
            </form>
        </div>
    );
}

export default SelectHall;