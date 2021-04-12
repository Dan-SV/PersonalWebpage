import IRoute from '../interfaces/route';
import CareerPage from '../components/resume/CareerPage';
import About from '../components/home/About';
import PageNotFound from '../components/404/Page404';

const routes: IRoute[] = [
    {
        path: '/career/',
        name: 'Career Page',
        component: CareerPage,
        exact: false
    },
    {
        path: '/',
        name: 'Home Page',
        component: About,
        exact: true
    },
    {
        path: '/',
        name: '404',
        component: PageNotFound,
        exact: false
    }

]
export default routes;