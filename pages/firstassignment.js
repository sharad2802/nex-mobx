import { Component, Fragment } from 'react'
import Link from 'next/link'
import {toJS} from 'mobx';
import { inject, observer} from 'mobx-react'
import withData from '@/components/hoc/with-data'

import Head from '@/components/head'
import MainTabs from '@/components/headertabs/mainTab'
import {MainDiv, ContainerWrp, GridTable, HeadingWrp} from '@/styles/style';
import {  MainWrp, H2, H3,  LHS } from "@/styles/element";


@withData
@inject('userStore','customersStore')
@observer
export default class Login extends Component {
  static async getInitialProps(props) {
    let { query } = props
    return { query }
  }

  handleChange = e => {
    const state = { ...this.state }

    if (e.target.name) {
      state[e.target.name] = e.target.value
    }

    this.setState(state)
  }

  selectCustomer=(id)=>{
    this.props.customersStore.selectCustomer(id);
  }

  render() {
    let context = this;
    let {customersStore} = this.props;
    let customers = customersStore.customer;
    let addressList = customersStore.addressList;
    let selectedRow = customersStore.selectedCustomer;
    let selectedCustomerName = customersStore.selectedCustomerName;
    return (
      <Fragment>
        <Head title='ASSIGNMENT 1' />
        <MainDiv>
        <MainWrp>
        <HeadingWrp>
              <LHS>
                <H2>ASSIGNMENTS</H2>
              </LHS>
            </HeadingWrp>

            <ContainerWrp>
            <MainTabs activeTab={'a1'}/>
              <div className="tabcontent" style={{display:'block'}}>
              <H3>List</H3>
                
                <GridTable>    
                  <table className="overFlowTable">
                    <thead>
                      <tr>
                        <th onClick={()=>{ context.props.customersStore.sortByItem('name') }}>Name</th>
                        <th onClick={()=>{ context.props.customersStore.sortByAge() }}>Age</th>
                        <th onClick={()=>{ context.props.customersStore.sortByItem('sex') }} >Sex</th>
                      </tr>
                    </thead>
                    <tbody>
                    {customers.map((item,index)=>{
                      return <tr className={((selectedRow==item.customer_Id)?'active':'')} onClick={()=>{ context.selectCustomer(item.customer_Id) }} key={index}><td >{item.name}</td><td>{item.age}</td><td>{item.sex}</td></tr>
                    })}
                    </tbody>
                  </table>
                </GridTable>
              </div>
            </ContainerWrp>

            {(addressList && addressList.length) ? <ContainerWrp style={{marginTop:'5px'}}>

           <GridTable>    
                  <table className="overFlowTable">
                    <thead>
                      <tr>
                  <th style={{textAlign:'center'}}>{selectedCustomerName}'s Address:</th>
                      </tr>
                    </thead>
                    <tbody>
                    {addressList.map((item,index)=>{
                      return <tr key={index}><td style={{textAlign:'center'}}>{item}</td></tr>
                    })}
                    </tbody>
                  </table>
                </GridTable>
          </ContainerWrp>:<div></div>}
        </MainWrp>
        
        </MainDiv>
      </Fragment>
    )
  }
}