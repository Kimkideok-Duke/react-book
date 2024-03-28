import { Link, useNavigate } from "react-router-dom";
import "./MovieList.js";

function Book() {
    const navigate = useNavigate();

    const Home = () => {
        navigate("/home");
    }
    return(
        <div> 
            <h1>예매가 완료되었습니다</h1>
            <button onclick={Home}><Link to="/home" className="navbar-brand">홈으로</Link></button>
        </div>
    );
}

export default Book;