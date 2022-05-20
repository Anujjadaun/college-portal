import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Admission from './Admission'
import Body from './Body'

export default function Navbar() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="navbar-brand nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="navbar-brand nav-item">
          <Link className="nav-link" aria-current="page" to="/">Placements</Link>
        </li>
        <li className="navbar-brand nav-item">
          <Link className="nav-link" to="/Admission">Admission</Link>
        </li>
        <li className="navbar-brand nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Departments
          </Link>
          <ul className="navbar-brand dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="navbar-brand nav-item">
          <Link className="nav-link" to='/'>Careers</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
</nav>
<Routes>
        <Route exact path='/' element={<Body/>}/>
        <Route path='/Admission' element={<Admission/>}/>
      </Routes>
</Router>
</div>
  )
}
