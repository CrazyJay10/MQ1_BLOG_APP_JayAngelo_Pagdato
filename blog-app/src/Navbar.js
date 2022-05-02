import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
            color: "white",
            backgroundColor: '#4c069c',
            borderRarius: '8px',
            padding: '20px',
            display: 'flex',
            margin: '0 auto',
        }}>
            <a className="navbar-brand" href="#"><h2>Blog App</h2></a>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#4c069c',
                    borderRarius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;