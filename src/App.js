import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button, Alert } from 'react-bootstrap';
import { addCustomerAction, removeCustomerAction } from './store/costumReducer';
import { addCashAction, getCashAction } from './store/cashReducer'
import { fetchCustomers } from './asyncActions/customers';



function App() {

  const cash = useSelector(state => state.cash.cash);
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustom = (name) => {
    const customer = {
      name, 
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustom = (id) => {
    dispatch(removeCustomerAction(id))
  }

  return (
    <div className="App">
        <div> <h1>Cash: <span style={{color: 'green', fontSize: '200px'}}>{cash}</span></h1>
          <Button 
            variant="danger" 
            style={{margin: '20px'}} 
            onClick={() => addCash(Number(prompt()))}>
            Add cash
          </Button>
          <Button 
            variant="warning" 
            onClick={() => getCash(Number(prompt()))}>
            Get cash
          </Button>
          <Button 
            variant="success" 
            style={{margin: '20px'}} 
            onClick={() => addCustom(String(prompt()))}>
            Add customer
          </Button>
          <Button 
            variant="info" 
            onClick={() => dispatch(fetchCustomers())}>
            Get customers from DB
          </Button>

        </div>
        {customers.length > 0 ? 
          <div>
            {customers.map(customer => 
                <Alert 
                  key={customer.id} 
                  style={{width: '500px', margin: '4px auto', cursor: 'pointer'}} 
                  variant={customer.name === 'Наталья' ? 'danger' : 'success'}
                  onClick={() => removeCustom(customer.id)}>
                    {customer.name} 
                </Alert>
              )}
          </div> : 
          <div style={{fontSize: '20px', margin: '30px 0'}}>
          Клиенты отсутствуеют
          </div>} 
    </div>
  );
}

export default App;
