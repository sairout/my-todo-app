import { useState } from "react";
import AddModal from "./AddModal";
import CardView from "./CardView";
import ListView from "./ListView";

function Home(){

    const [ cardViewState, setCardViewState ] = useState(true);
    const [ listViewState, setListViewState ] = useState(false);
    const [ addModalState, setaddModalState ] = useState(false);

    function cardViewHandler(){
        setCardViewState(true);
        setListViewState(false);
    }

    function listViewHandler(){
        setListViewState(true);
        setCardViewState(false);
    }

    function addModalHandler(){
        setaddModalState(true);
    }

    function closeModalHandler(){
        setaddModalState(false);
    }

    return (
        <div className="card">
            <h5 className="card-header" style={{textAlign : 'left', paddingLeft : '25px'}}>
                <div className="row">
                    <div className="col-6">
                        Todos
                    </div>
                    <div className="col-6" style={{textAlign : 'end'}}>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{paddingRight: '5px'}}>
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" onClick={cardViewHandler} defaultChecked /><i className='fas fa-grip-horizontal'></i>
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id="option2" autoComplete="off" onClick={listViewHandler}/><i className='fas fa-bars'></i>
                            </label>
                        </div>
                        <button onClick={addModalHandler} className="btn btn-primary"><i className='fas fa-plus'></i></button>
                    </div>
                </div>
            </h5>

            { cardViewState && <CardView />}
            { listViewState && <ListView />}

            { addModalState && <AddModal closeModalHandler={closeModalHandler} /> }

        </div>
    );
}

export default Home;