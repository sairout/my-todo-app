import './Modal.css';

function DeleteModal(props) {
    return (
        <div className="bd-example bd-example-modal">
            <div className="modal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span onClick={props.closeDeleteHandler} aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete?</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.closeDeleteHandler} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button onClick={props.closeDeleteHandler} type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;