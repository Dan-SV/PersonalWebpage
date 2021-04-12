import styles from '../styles/Container.module.css';
import { BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import routes from '../config/routes';
import Header from './Header';
import Footer from './Footer';

export default function Container() {
    return (
        <BrowserRouter>
            <Header/>
            <div className={styles.container}>
                
                <Switch>
                    {routes.map((route, index) => {
                        return(
                        <Route 
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps<any>) => (
                                <route.component
                                    name={route.name} 
                                    {...props}
                                    {...route.props}
                                />
                            )}
                        />);
                    })}
                    
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}
