import { Component, Fragment} from 'react'
import {toJS} from 'mobx';
import Link from 'next/link'
import MainTabs from '@/components/headertabs/mainTab'
import { inject, observer} from 'mobx-react'
import withData from '@/components/hoc/with-data'
import Head from '@/components/head'
import { ToastContainer, toast } from 'react-toastify';
import {MainDiv,TopHeader, ContainerWrp, GridTable, HeadingWrp, TestMsg} from '@/styles/style';
import { MenuLink, MainWrp, H2, H3, WD25, WD33, WD66,  WD50, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, ActionBtn, ActionBtnEdit, ActionBtnDownload, ActionBtnSave, ActionBtnDelete, Row, TAC, TAL, TAR, BrdrBtm, FlagBtnActive,FlagBtnDeActive, ActionBtnUl, MB10,SuccesStatus,ErrorStatus, LoaderStatus, ChooseImgForm, RHS, LHS } from "@/styles/element";


@withData
@inject('employeeStore')
@observer
export default class Employee extends Component {
    static async getInitialProps(props) {
        let { query } = props
        return { query }
    }

    constructor() {
        super();
    }

    sortIntList=(item)=>{
        this.props.employeeStore.sortByInteger(item)
    }

    sortItemList=(item)=>{
        this.props.employeeStore.sortByItem(item)
    }

    inputChange= (e,type)=>{
        this.props.employeeStore.filterList(e.target.value,type)
    }

    handleScroll = (e)=>{
      const target = event.target
      let context = this
      if(target.scrollHeight - target.scrollTop === target.clientHeight){
        let updated = context.props.employeeStore.getUpdatedOrNot
        let text = updated ? 'End Of List' :'Simulating Fetch in a sec' 
        toast.success(text,{
          position: toast.POSITION.TOP_LEFT,
          autoClose: 1000,
        })
        setTimeout(()=>{
          context.props.employeeStore.updateList()
        },1000)
      }
    }

    render() {
        let context= this
        let list = toJS(this.props.employeeStore.getEmployeeFirst);
        let filteredList = this.props.employeeStore.filteredEmployeeData;
        let filterFlag = this.props.employeeStore.filterFlag
        let renderList = filterFlag ? filteredList : list
        return (
        <Fragment>
            <div>
            <Head title='ASSIGNMENT 3' />
        <MainDiv>
        <MainWrp>
        <HeadingWrp>
              <LHS>
                <H2>ASSIGNMENTS</H2>
              </LHS>
            </HeadingWrp>

            <ContainerWrp>
            <MainTabs activeTab={'a3'}/>
              <div className="tabcontent" style={{display:'block'}}>
              <H3>List</H3>
                
                <GridTable style={{'display':'inline-block'}}>    
                <Row className="clearfix">
                <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Filter by name</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag id="title" onChange={(e) => this.inputChange(e,'name')}></InputTag>
                      </WD100>
                  </WD66>
                    <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Filter by Designation</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag id="title" onChange={(e) => this.inputChange(e,'designation')}></InputTag>
                      </WD100>
                    </WD66>
                    
                </Row>
                  <table onScroll={context.handleScroll} style={{'overflowY':'scroll','display':'block','height':'250px'}} className="overFlowTable">
                    <thead>
                      <tr>
                        <th onClick={()=>{ context.sortItemList('name') }}>Name</th>
                        <th onClick={()=>{ context.sortIntList('age') }}>Age</th>
                        <th onClick={()=>{ context.sortItemList('company') }}>Company</th>
                        <th onClick={()=>{ context.sortItemList('designation') }}>Designation</th>
                        <th onClick={()=>{ context.sortIntList('salary') }}>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                    { renderList.map((item,index)=>{ 
                        return <tr key={item._id}><td>{item.name}</td><td>{item.age}</td><td>{item.company}</td><td>{item.designation}</td><td>{item.salary}</td></tr>
                     })}
                    </tbody>
                  </table>
                </GridTable>
              </div>
            </ContainerWrp>
        </MainWrp>
        <ToastContainer />
        </MainDiv>
            </div>
        </Fragment>
        )
    }
}