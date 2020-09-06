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
          if(!this.updated){
            this.updated = true;
            this.employeeData = oldData.concat(newData);
          }
      }

      @action
      sortByAge = () => {
          console.log('{{sort}}',this.employeeData[0]['age'],this.employeeData.length,this.employeeData[this.employeeData.length-1]['age'])
          let firstAge= this.employeeData[0]['age']
          let lengthOfList = this.employeeData.length-1
          let lastAge = this.employeeData[lengthOfList]['age']
        this.employeeData = this.employeeData.slice().sort(function(a, b){
            if(firstAge>lastAge){
                return a.age - b.age;
            }
            return b.age - a.age;
            
          });
      }

      @action
      sortBySalary = () => {
          console.log('{{sort}}',this.employeeData[0]['age'],this.employeeData.length,this.employeeData[this.employeeData.length-1]['age'])
          let firstSalary= this.employeeData[0]['salary']
          let lengthOfList = this.employeeData.length-1
          let lastSalary = this.employeeData[lengthOfList]['salary']
        this.employeeData = this.employeeData.slice().sort(function(a, b){
            if(firstSalary>lastSalary){
                return a.salary - b.salary;
            }
            return b.salary - a.salary;
            
          });
      }

      @action
      sortByItem = (item) => {
          console.log('{{isot}}',item)
          let firstSalary= this.employeeData[0][item]
          let lengthOfList = this.employeeData.length-1
          let lastSalary = this.employeeData[lengthOfList][item]
          console.log('{{isot}}',item,firstSalary,lastSalary,firstSalary>lastSalary)
          this.employeeData = this.employeeData.slice().sort(function(a, b){
              console.log('{{rrrr}}',a,a[item],firstSalary>lastSalary)
            if(firstSalary>lastSalary){
                return a[item].localeCompare(b[item]);
            }
            return b[item].localeCompare(a[item]);
            
          });
      }

      @action
      filterList = (item) => {
          console.log('{{isot}}',item)
          let duplicateList = this.employeeData;
          
          let newList = duplicateList.filter(function(v, i) {
              console.log('>>>>>>',item,v["name"],v["name"].startsWith(item))
              let name = v["name"].toLowerCase()
              let designation = v["designation"].toLowerCase()
              let sItem = item.toLowerCase()
            //   if(){

            //   }
            return ((name.startsWith(sItem) || designation.startsWith(sItem)));
          })

          console.log('{{filllll}}',newList)
          this.filteredEmployeeData = newList;
          this.filterFlag = true
      }

  }

 export default new Employee();