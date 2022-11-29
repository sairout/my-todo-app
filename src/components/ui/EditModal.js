import './Modal.css';

function EditModal(props) {
    return (
        <div className="bd-example bd-example-modal">
            <div className="modal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span onClick={props.closeEditHandler} aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.closeEditHandler} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button onClick={props.closeEditHandler} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;