import { Component, Fragment} from 'react'
import Link from 'next/link'
import {toJS} from 'mobx';
import { inject, observer} from 'mobx-react'
import withData from '@/components/hoc/with-data'
import Head from '@/components/head'
import MainTabs from '@/components/headertabs/mainTab'
import TabFirst from '@/components/tabs/firstTab'
import TabSecond from '@/components/tabs/secondTab'
import {MainDiv,TopHeader, ContainerWrp, GridTable, HeadingWrp, TestMsg} from '@/styles/style';
import { MenuLink, MainWrp, H2, H3, WD25, WD33, WD66,  WD50, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, ActionBtn, ActionBtnEdit, ActionBtnDownload, ActionBtnSave, ActionBtnDelete, Row, TAC, TAL, TAR, BrdrBtm, FlagBtnActive,FlagBtnDeActive, ActionBtnUl, MB10,SuccesStatus,ErrorStatus, LoaderStatus, ChooseImgForm, RHS, LHS } from "@/styles/element";
const ls = require('local-storage');

@withData
@inject('tabsStore')
@observer
export default class Tabs extends Component {
    static async getInitialProps(props) {
        let { query } = props
        return { query }
    }

    constructor() {
        super();
        this.child = React.createRef();
        this.elems = [];
    }

    onTClick = () => {
        this.child.current.submitFirstTab();
      };

    warning=(boxes)=>{
        let context = this;
        let empty = boxes[0];
        let passMbox = (empty=='cpassword');
        this.elems[empty].style.border= '1px solid red';
        passMbox && (context.props.tabsStore.setPassNotMatch(true));
        setTimeout(()=>{
            passMbox && (context.props.tabsStore.setPassNotMatch(false));
            context.elems && context.elems[empty] && (context.elems[empty].style.border= '1px solid black');
        },3000)
    }

    checkEmpty=(obj)=>{
        let context = this;
            let r = [];
            let userDetail = toJS(context.props.tabsStore.user);
            obj && (userDetail = toJS(obj));
            for(var key in userDetail) {
                    if(!userDetail[key]) {
                    r.push(key) 
                    }
                }  
            return r;
    }

    componentDidMount(){
        let userFromLs = ls.get('tabsLs') || {name:'',lname:'',uname:'',password:'',cpassword:''};
        let userContactFromLs = ls.get('tabsContact') || {number:'',email:''};
        this.props.tabsStore.setUserFromLs(userFromLs);
        this.props.tabsStore.setContactFromLs(userContactFromLs);
        let checkSubmitted = ls.get('submitted')
        console.log('{{dsad}}',this.props)
        this.props.tabsStore.setSubmitted(checkSubmitted);
        checkSubmitted && this.props.tabsStore.changeTab('second')
    }

    selectCustomer=(id)=>{
        this.props.customersStore.selectCustomer(id);
    }

    setRef=(item,ref)=>{
        this.elems[item] = ref;
    }

    setSubmit=(flag)=>{
        this.props.tabsStore.setSubmitted(flag)
        ls.set('submitted',flag)
    }

    render() {
        let context = this;
        let userContact = {...this.props.tabsStore.getUserContacts};
        let user = (this.props.tabsStore.getuser);
        let activeTab = this.props.tabsStore.activeTab;
        let pNotMatch = this.props.tabsStore.passNotMatch;
        let submitted= this.props.tabsStore.submitted;
        let edit= this.props.tabsStore.setSubmitted;
        return (
        <Fragment>
            <Head title='ASSIGNMENT 2' />
            <MainDiv>
        <MainWrp>
        <HeadingWrp>
              <LHS>
                <H2>ASSIGNMENTS</H2>
              </LHS>
            </HeadingWrp>

            <ContainerWrp>
            <MainTabs activeTab={'a2'}/>
              <div className="tabcontent" style={{display:'block'}}>

              <div className="tab">
                  <button onClick={()=>{ context.props.tabsStore.changeTab('first') }} className={(activeTab && (activeTab=='first'))?'tablinks active':'tablinks'} id="defaultOpen">
                  Tab 1
                  </button>
                  <button onClick={()=>{ context.onTClick() }} className={(activeTab && (activeTab=='first'))?'tablinks':'tablinks active'}>
                    tab 2
                  </button>
              </div>
              <div className="tabcontent" style={{display:'block'}}></div>
                
              <div>
                    {(activeTab && (activeTab=='first')) ?<TabFirst edit={context.setSubmit} submitted={submitted} active user={user} warning={context.warning} checkEmpty={context.checkEmpty} setUser={context.props.tabsStore.setUser} tabsStore={context.props.tabsStore} ref={this.child}  setRef={context.setRef}  pNotMatch={pNotMatch}/>
                    :<TabSecond submitted={submitted} edit={context.setSubmit} warning={context.warning}  checkEmpty={context.checkEmpty} changeTab={context.props.tabsStore.changeTab} tabsStore={context.props.tabsStore} userContact={userContact} setRef={context.setRef} />
                    }
            </div>
              </div>
            </ContainerWrp>
        </MainWrp>
        </MainDiv>
        </Fragment>
        )
    }
}