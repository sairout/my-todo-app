import Home from '../ui/Home';
import { Route, Routes } from 'react-router-dom';
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Error from '../ui/Error';

function Body(){
    return (
        <div className="container-fluid">
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </div>
    );
}

export default Body;