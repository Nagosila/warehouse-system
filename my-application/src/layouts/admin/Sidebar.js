import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar=()=>{

      return(  
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
    <div className="nav">
    <div className="sb-sidenav-menu-heading">WAREHOUSE</div>

            <Link className="nav-link" to="/admin/dashboard">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                Dashboard
            </Link>

            <Link className="nav-link" to="/admin/Profile">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
               Profile
            </Link>

            <Link className="nav-link" to="/admin/add-category">
             <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
             Add Category
            </Link>

            <Link className="nav-link" to="/admin/view-category">
             <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
             View Category
            </Link>
            
           
           
            
            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                        Authentication
                        <div className="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="login.html">Login</Link>
                            <Link className="nav-link" to="register.html">Register</Link>
                            <Link className="nav-link" to="password.html">Forgot Password</Link>
                        </nav>
                    </div>
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                        Error
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav class="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="401.html">401 Page</Link>
                            <Link className="nav-link" to="404.html">404 Page</Link>
                            <Link className="nav-link" to="500.html">500 Page</Link>
                        </nav>
                    </div>
                </nav>
            </div>

           
        </div>
    </div>
    <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
    </div>
</nav>

    );
}
        export default Sidebar;