import { Component, Fragment} from 'react'
import {toJS} from 'mobx';
import Link from 'next/link'
import { inject, observer} from 'mobx-react'
import withData from '@/components/hoc/with-data'
import Head from '@/components/head'
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

    componentDidMount(){
        console.log('{{third}}',this.props.employeeStore.getEmployeeFirst)
    }

    sortAgeList=()=>{
        this.props.employeeStore.sortByAge()
    }

    sortSalaryList=()=>{
        this.props.employeeStore.sortBySalary()
    }

    sortItemList=(item)=>{
        this.props.employeeStore.sortByItem(item)
    }

    inputChange= (e)=>{
        this.props.employeeStore.filterList(e.target.value)
    }

    render() {
        let context= this
        let list = toJS(this.props.employeeStore.getEmployeeFirst);
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
              <div className="tab">
                  <Link href="/firstassignment">
                  <a>ASSIGNMENT 1</a>
                    </Link>
                  <Link  href="/tab">
                    <a>ASSIGNMENT 2</a>
                  </Link>
                    <Link  href="/employee">
                      <a className="active">ASSIGNMENT 3</a>
                    </Link>
              </div>
              <div className="tabcontent" style={{display:'block'}}>
              <H3>List</H3>
                
                <GridTable>    
                  <table className="overFlowTable">
                    <thead>
                      <tr>
                        <th onClick={()=>{ context.sortItemList('name') }}>Name</th>
                        <th onClick={()=>{ context.sortAgeList() }}>Age</th>
                        <th onClick={()=>{ context.sortItemList('company') }}>Company</th>
                        <th onClick={()=>{ context.sortItemList('designation') }}>Designation</th>
                        <th onClick={()=>{ context.sortSalaryList() }}>Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                    {list.map((item,index)=>{ 
                        return <tr key={item._id}><td>{item.name}</td><td>{item.age}</td><td>{item.company}</td><td>{item.designation}</td><td>{item.salary}</td></tr>
                     })}
                    </tbody>
                  </table>
                </GridTable>
              </div>
            </ContainerWrp>
        </MainWrp>
        
        </MainDiv>
            </div>
        </Fragment>
        )
    }
}