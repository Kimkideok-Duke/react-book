import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieList.css";

function MovieList() {

    const navigate = useNavigate();

    const book = ({ hallList }) => {
        navigate("/BookSeat");
    }

    const { hall } = useParams();
    const url = `/BookSeat/${hall}`;

    return (
        <>
            <Table className="boxoffice" striped border='true' hover>
                <tbody>
                    <tr>
                        <th colSpan={4}>박스오피스</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td className="img"><img className="poster" src="/Dune2.png" /></td>
                        <td>듄-파트2</td>
                        <td><button onClick={book}>예매</button></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td className="img"><img className="poster" src="/pamyo.png" /></td>
                        <td>파묘</td>
                        <td><button>예매</button></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td className="img"><img className="poster" src="/datgle.png" /></td>
                        <td>댓글부대</td>
                        <td><button>예매</button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default MovieList;