import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Category from '../components/admin/category/Category';
import ViewCategory from '../components/admin/category/ViewCategory';
import EditCategory from '../components/admin/category/EditCategory';
const routes = [
{path:'/admin',exact: true,name: 'Admin'},
{path:'/admin/dashboard',exact:true,name:'Dashboard',components: Dashboard},
{path:'/admin/profile',exact:true,name:'Profile',components: Profile},
{path:'/admin/add-category',exact:true,name:'Category', components: Category},
{path:'/admin/view-category',exact:true,name: 'ViewCategory', components: ViewCategory},  
{path:'/admin/edit-category/:id',exact:true,name: 'EditCategory', components: EditCategory}, 
];


export default routes;