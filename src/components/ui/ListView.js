function ListView(props){
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <button onClick={props.editHandler} className="btn btn-success"><i className="fas fa-edit"></i></button> {' '}
                        <button onClick={props.deleteHandler} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                        <button onClick={props.editHandler} className="btn btn-success"><i className="fas fa-edit"></i></button> {' '}
                        <button onClick={props.deleteHandler} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>
                        <button onClick={props.editHandler} className="btn btn-success"><i className="fas fa-edit"></i></button> {' '}
                        <button onClick={props.deleteHandler} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ListView;