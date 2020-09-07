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

      @action
      sortByAge = () => {
          let firstAge= this.customer[0]['age']
          let lengthOfList = this.customer.length-1
          let lastAge = this.customer[lengthOfList]['age']
          this.customer = this.customer.slice().sort(function(a, b){
            if(firstAge>lastAge){
                return a.age - b.age;
            }
            return b.age - a.age;
            
          });
      }

      @action
      sortByItem = (item) => {
          let firstSalary= this.customer[0][item]
          let lengthOfList = this.customer.length-1
          let lastSalary = this.customer[lengthOfList][item]
          this.customer = this.customer.slice().sort(function(a, b){
            if(firstSalary>lastSalary){
                return a[item].localeCompare(b[item]);
            }
            return b[item].localeCompare(a[item]);
            
          });
      }
    
      @computed get customerCount(){
          return this.customer.length
      }
      

  }

 export default new Customer();