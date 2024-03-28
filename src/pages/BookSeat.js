import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Book.js";

function BookSeat() {
    const navigate = useNavigate();

    const Book = () => {
        navigate("/Book");
    }

    return (
        <>
            <div>
                <Table >
                    <tbody>
                        <tr>
                            <td onClick={Book}>1</td>
                            <td onClick={Book}>2</td>
                            <td onClick={Book}>3</td>
                            <td onClick={Book}>4</td>
                            <td onClick={Book}>5</td>
                        </tr>
                        <tr>
                            <td onClick={Book}>6</td>
                            <td onClick={Book}>7</td>
                            <td onClick={Book}>8</td>
                            <td onClick={Book}>9</td>
                            <td onClick={Book}>10</td>
                        </tr>
                        <tr>
                            <td onClick={Book}>11</td>
                            <td onClick={Book}>12</td>
                            <td onClick={Book}>13</td>
                            <td onClick={Book}>14</td>
                            <td onClick={Book}>15</td>
                        </tr>
                        <tr>
                            <td onClick={Book}>16</td>
                            <td onClick={Book}>17</td>
                            <td onClick={Book}>18</td>
                            <td onClick={Book}>19</td>
                            <td onClick={Book}>20</td>
                        </tr>
                        <tr>
                            <td onClick={Book}>21</td>
                            <td onClick={Book}>22</td>
                            <td onClick={Book}>23</td>
                            <td onClick={Book}>24</td>
                            <td onClick={Book}>25</td>
                        </tr>
                        <tr>
                            <td onClick={Book}>26</td>
                            <td onClick={Book}>27</td>
                            <td onClick={Book}>28</td>
                            <td onClick={Book}>29</td>
                            <td onClick={Book}>30</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default BookSeat;