import { action, observable, computed } from 'mobx'
import  customerList  from '@/constants/customersJson'

class Customer {
    @observable customer = customerList;
    @observable selectedCustomer = null;
    @observable addressList = [];
    @observable selectedCustomerName = null;
    
      get customer() {
        return this.customer
      }

      @action
      selectCustomer = (customer_Id) => {
        let addressList = this.customer.filter(item=>{
            return customer_Id == item.customer_Id
        })
        this.selectedCustomer = customer_Id
        this.addressList = addressList[0]['address']
        this.selectedCustomerName = addressList[0]['name']
      }
    
      @computed get customerCount(){
          return this.customer.length
      }

  }

 export default new Customer();