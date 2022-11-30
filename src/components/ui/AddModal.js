import './Modal.css';

function AddModal(props) {
    return (
        <div className="bd-example bd-example-modal">
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span onClick={props.closeModalHandler} aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.closeModalHandler} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button onClick={props.closeModalHandler} type="button" className="btn btn-primary">Create Todo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;