import { action, observable, computed } from 'mobx'
import  pageData  from '@/constants/employeeJson'

class Employee {
    @observable employeeData = pageData[0];
    @observable filteredEmployeeData = '';
    @observable employeeDataSecond = pageData[1];
    @observable filterFlag = false;
    @observable updated = false;
    
      get getEmployeeFirst() {
        return this.employeeData
      }

      get getEmployeeSecond() {
        return this.employeeDataSecond
      }
     
      get getUpdatedOrNot() {
        return this.updated
      }

      @action
      updateList = () => {
          let oldData = this.employeeData
          let newData = this.employeeDataSecond
          let filterList = this.filteredEmployeeData
          if(!this.updated){
            this.updated = true;
            this.employeeData = oldData.concat(newData);
            filterList && filterList.length && (this.filteredEmployeeData=filterList.concat(newData))
          }
      }

      @action
      sortByInteger = (item) => {
          let empData = this.filterFlag ? this.filteredEmployeeData :this.employeeData
          let listToupdate = this.filterFlag ? "filteredEmployeeData" :"employeeData"
          let firstItem= empData[0][item]
          let lengthOfList = empData.length-1
          let lastItme = empData[lengthOfList][item]
          this[listToupdate] = empData.slice().sort(function(a, b){
            if(firstItem>lastItme){
                return a[item] - b[item];
            }
            return b[item] - a[item];
            
          });
      }

      @action
      sortByItem = (item) => {
          let empData = this.filterFlag ? this.filteredEmployeeData :this.employeeData
          let listToupdate = this.filterFlag ? "filteredEmployeeData" :"employeeData"
          let firstSalary= empData[0][item]
          let lengthOfList = empData.length-1
          let lastSalary = empData[lengthOfList][item]
          this[listToupdate] = empData.slice().sort(function(a, b){
            if(firstSalary>lastSalary){
                return a[item].localeCompare(b[item]);
            }
            return b[item].localeCompare(a[item]);
            
          });
      }

      @action
      filterList = (item,type) => {
          let duplicateList = this.employeeData;
          let newList = duplicateList.filter(function(v, i) {
              let name = v[type].toLowerCase()
              let sItem = item.toLowerCase()
            return ((name.startsWith(sItem)));
          })
          this.filteredEmployeeData = newList;
          this.filterFlag = true
      }

  }

 export default new Employee();