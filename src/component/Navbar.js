import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="navbar-brand nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="navbar-brand nav-item">
          <a class="nav-link" aria-current="page" href="/">Placements</a>
        </li>
        <li class="navbar-brand nav-item">
          <a class="nav-link" href="/Admission">Admission</a>
        </li>
        <li class="navbar-brand nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Departments
          </a>
          <ul class="navbar-brand dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="navbar-brand nav-item">
          <a class="nav-link">Careers</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
</nav>
</div>
  )
}
