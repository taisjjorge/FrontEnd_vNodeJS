import { Switch, Route } from 'react-router-dom';
import Produtos from './Pages/Produtos'
import Pedidos from './Pages/Pedidos'
import Home from './Pages/Home';



function Rotas() {
    return(
        <Switch>
            <Route exact path="/Home" component={ Home } />
            <Route  path="/produtos" component={ Produtos } />
            <Route  path="/Pedidos" component={ Pedidos } />              
        </Switch>
    )
}

export default Rotas;