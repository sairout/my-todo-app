// import { Link } from "react-router-dom";
import './Todo.css';

function Todo(props){
    return (
            <div id='todo' className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button onClick={props.editHandler} className="btn btn-success"><i className="fas fa-edit"></i></button> {' '}
                        <button onClick={props.deleteHandler} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
    );
}

export default Todo;