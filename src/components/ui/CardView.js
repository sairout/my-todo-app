import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import Todo from "./Todo";

function CardView(){
    
    const [ editModalOpen, setEditModalOpen ] = useState(false);
    const [ deleteModalOpen, setDeleteModalOpen ] = useState(false);

    function editHandler(){
        console.log('test');
        setEditModalOpen(true);
    }
    
    function deleteHandler(){
        setDeleteModalOpen(true);
    }

    function closeEditHandler(){
        setEditModalOpen(false);
    }

    function closeDeleteHandler(){
        setDeleteModalOpen(false);
    }
    
    return (
        <div className="card-body">
                <div className="row">
                
                    <Todo editHandler={ editHandler } deleteHandler = { deleteHandler } />
                    { editModalOpen && <EditModal closeEditHandler = { closeEditHandler } /> }
                    { deleteModalOpen && <DeleteModal closeDeleteHandler = { closeDeleteHandler } /> }
                    <Todo />
                    <Todo />
                    <Todo />
                </div>
        </div>
    );
}

export default CardView;