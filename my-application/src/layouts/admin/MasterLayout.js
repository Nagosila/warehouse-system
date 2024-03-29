import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import routes from '../../routes/routes';
import { Switch,Route, Redirect } from 'react-router-dom';

const MasterLayout=()=>{

    return(

<div className='sb-nav-fixed'>
   <Navbar/>
   <div id="layoutSidenav">

    <div id="layoutSidenav_nav">
        <Sidebar/>  
    </div>
    <div id="layoutSidenav_content">
             <main>
                <Switch>
                        {routes.map((route,idx)=>{
                            return(
                                route.components && (
                                    <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props)=>(
                                       <route.components{...props}/>
                                    )}
                                
                                    />
                                )
                            )
                        })}
                        <Redirect from='admin' to='/admin/dashboard'/>
                </Switch>
             </main>
        <Footer/>
    </div>
   </div>
   </div>
    );

}

export default MasterLayout;