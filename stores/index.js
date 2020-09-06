import Sample from './sample'
import User from './user'
import Customer from './customers'
import Tab from './tabs'
import Employee from './employee'

let store = null

// RootStore combines multiple stores and can share references accross stores
class RootStore {
  constructor() {
    this.sampleStore = new Sample()
    this.userStore = new User()
    this.customersStore = Customer
    this.tabsStore = Tab
    this.employeeStore = Employee
  }
}

export function initStore(isServer) {
  if (isServer) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore()
    }
    return store
  }
}
