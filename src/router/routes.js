import Dashboard from "../views/Dashboard";
import Users from "../views/user/List";


export default [
    {
        path: "/",
        component: Dashboard,
    },
    {
        path: "/dashboard",
        name : 'dashboard',
        component: Dashboard,
    },
    {
        path: "/users",
        name : 'users',
        component: Users ,
    },

];