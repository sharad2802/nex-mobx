import { Component } from 'react'
import {toJS} from 'mobx';
import { inject, observer} from 'mobx-react'
import Link from 'next/link'
import { MenuLink, MainWrp, H2, H3, WD25, WD33, WD66,  WD50, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, ActionBtn, ActionBtnEdit, ActionBtnDownload, ActionBtnSave, ActionBtnDelete, Row, TAC, TAL, TAR, BrdrBtm, FlagBtnActive,FlagBtnDeActive, ActionBtnUl, MB10,SuccesStatus,ErrorStatus, LoaderStatus, ChooseImgForm, RHS, LHS } from "@/styles/element";
const ls = require('local-storage');


@observer
export default class TabFirst extends Component {
    
    handleChange = e => {
        let obj = ls.get('tabsLs') || {name:'',lname:'',uname:'',password:'',cpassword:''}
        this.props.setUser({key:e.target.id,value:e.target.value})
        obj[e.target.id]=e.target.value
        ls.set('tabsLs',obj)
        this.props.tabsStore.setSwitchable(false)
        if(e.target.id=='cpassword'){
            if(e.target.value!=this.props.tabsStore.getuser.password){
                this.passwordNotMatch()
            }else{
                this.props.elems && this.props.elems['cpassword'] && (this.props.elems['cpassword'].style.border='1px solid black');
                this.props.tabsStore.setPassNotMatch(false)
            }
        }
    }

    submitFirstTab=()=>{
        let userDetail = toJS(this.props.tabsStore.getuser)
        let emptyBoxs = this.props.checkEmpty()
        if(emptyBoxs && emptyBoxs.length){
            this.props.warning(emptyBoxs)
        }else if(userDetail.password!=userDetail.cpassword){
          this.passwordNotMatch('cpassword')
        }else{
          this.props.tabsStore.changeTab('second')
        }
    }

    passwordNotMatch=()=>{
        this.props.warning(['cpassword'])
      }

    render() {
        let context = this;
        const {user, setRef, pNotMatch,tabsStore,edit,submitted} = this.props;
        return (
            <div>
            <Row className="clearfix">
                <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Name</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag disabled={submitted} value={user.name} ref={(ref) => { setRef('name',ref) }} onChange={context.handleChange} type="text" id="name"></InputTag>
                      </WD100>
                    </WD66>

                    <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Last Name</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag disabled={submitted} value={user.lname}  ref={(ref) => { setRef('lname',ref) }} onChange={context.handleChange} type="text" id="lname"></InputTag>
                      </WD100>
                    </WD66>
                    
                    <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">User Name</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag disabled={submitted} value={user.uname} ref={(ref) => { setRef('uname',ref) }} onChange={context.handleChange} type="text" id="uname"></InputTag>
                      </WD100>
                    </WD66>
                    <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Password</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag disabled={submitted} value={user.password} ref={(ref) => {setRef('password',ref) }} onChange={context.handleChange} type="password" id="password"></InputTag>
                      </WD100>
                    </WD66>
                    <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Confirm Password</label>
                          <span className="star RHS">*</span>
                          {pNotMatch && <span style={{color:'red',marginLeft:'4px'}}>  Password does not match </span>}
                        </p>
                        <InputTag disabled={submitted} value={user.cpassword} ref={(ref) => {setRef('cpassword',ref) }} onChange={context.handleChange} type="password" id="cpassword"></InputTag>
                      </WD100>
                    </WD66>
            </Row>
            <div className="clearfix">
                  {!submitted ? <div>
                    <SaveBtn style={{textAlign:'center',color:'rgb(255, 255, 255)',padding:'10px',minWidth:'175px',borderRadius:'4px',display:'inline-block',backgroundColor:'rgb(12, 53, 83)',border:'1px solid rgb(12, 53, 83)'}} onClick={()=>{context.submitFirstTab() }}>Next</SaveBtn>
                  </div>: <SaveBtn style={{textAlign:'center',color:'rgb(255, 255, 255)',padding:'10px',minWidth:'175px',borderRadius:'4px',display:'inline-block',backgroundColor:'rgb(12, 53, 83)',border:'1px solid rgb(12, 53, 83)'}} onClick={()=>{ edit(false) }}>Already Submitted Click here to edit again</SaveBtn>}
                </div>
            <ul>
                {/* <li>name<input value={user.name} ref={(ref) => { setRef('name',ref) }} onChange={context.handleChange} type="text" id="name"/></li> */}
                {/* <li>last name<input value={user.lname}  ref={(ref) => { setRef('lname',ref) }} onChange={context.handleChange} type="text" id="lname"/></li> */}
                {/* <li>user name <input value={user.uname} ref={(ref) => { setRef('uname',ref) }} onChange={context.handleChange} type="text" id="uname"/></li> */}
                {/* <li>password<input value={user.password} ref={(ref) => {setRef('password',ref) }} onChange={context.handleChange} type="password" id="password"/></li> */}
                {/* <li>confirm password<input value={user.cpassword} ref={(ref) => {setRef('cpassword',ref) }} onChange={context.handleChange} type="password" id="cpassword"/>{pNotMatch && <span style={{color:'red'}}>Pass not match </span>}</li> */}
                {/* <li onClick={()=>{context.submitFirstTab() }}><p>next</p></li> */}
            </ul>
            </div>
        )
    }
}
