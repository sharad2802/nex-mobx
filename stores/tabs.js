import { action, observable, computed } from 'mobx'

class Tab {
    @observable user = {name:'',lname:'',uname:'',password:'',cpassword:''}
    @observable userContacts = {number:'',email:''}
    @observable activeTab = "first"
    @observable passNotMatch = false
    @observable switchable = false
    @observable submitted = false

    get getuser() {
    return this.user
    }
      
    get getSwitchable() {
    return this.switchable
    }

    get getUserContacts() {
    return this.userContacts
    }

    @action
    setSwitchable = (flag) => {
        this.switchable = flag
    }

    @action
    setUser = (obj) => {
        this.user[obj.key] = obj.value
    }

    @action
    setUserContact = (obj) => {
        this.userContacts[obj.key] = obj.value
    }

    @action
    setPassNotMatch = (flag) => {
        this.passNotMatch = flag
    }

    @action
    changeTab = (tab) => {
        this.activeTab = tab
    }

    @action
    setUserFromLs = (obj) => {
        this.user = obj
    }

    @action
    setSubmitted = (flag) => {
        this.submitted = flag
    }

    @action
    setContactFromLs = (obj) => {
        this.userContacts = obj
    }
    
  }

 export default new Tab();