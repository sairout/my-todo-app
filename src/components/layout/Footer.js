//import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(){
    return (
    <footer id='footer' className="footer mt-auto py-3 bg-dark">
        <div className="container">
            <span className="text-muted">© 2022 Company, Inc. All rights reserved.</span>
            <ul className="list-unstyled d-flex">
                {/* <Link className="ms-3"><a className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></Link>
                <Link className="ms-3"><a className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></Link>
                <Link className="ms-3"><a className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></Link> */}
            </ul>
        </div>
    </footer>
    );
}