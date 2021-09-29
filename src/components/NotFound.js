import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div style={{height: "60vh", display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <div className="card">
                <div className="card-body text-center text-white border-white">
                <h1>Ooops, Not Found</h1>
               <Link to="/"><button type="button" className="btn btn-light my-5 rounded-pill">Home</button></Link>
                </div>
             </div>
        </div>
    )
}

export default NotFound;