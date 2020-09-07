import { Component } from 'react'
import Link from 'next/link'
import { inject, observer} from 'mobx-react';
import { MenuLink, MainWrp, H2, H3, WD25, WD33, WD66,  WD50, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, ActionBtn, ActionBtnEdit, ActionBtnDownload, ActionBtnSave, ActionBtnDelete, Row, TAC, TAL, TAR, BrdrBtm, FlagBtnActive,FlagBtnDeActive, ActionBtnUl, MB10,SuccesStatus,ErrorStatus, LoaderStatus, ChooseImgForm, RHS, LHS } from "@/styles/element";
import { ToastContainer, toast } from 'react-toastify';
const ls = require('local-storage');

@observer
export default class TabSecond extends Component {

    constructor() {
        super();
        this.state={
            number:false,
            email:false,
        }
    }

    handleUserContactChange = e => {
        let obj = ls.get('tabsContact') || {number:'',email:''};
        this.props.tabsStore.setUserContact({key:e.target.id,value:e.target.value});
        obj[e.target.id]=e.target.value;
        ls.set('tabsContact',obj)
  
    }

    checkValidEmail=(email)=>{
        var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailReg.test(email);
    }

    checkValidPhoneNo=(number)=>{
        return /^\d{10}$/.test(parseInt(number))
    }
    
    submitContacts=()=>{
        let context = this
        let userContacts= this.props.userContact;
        let emptyBox = this.props.checkEmpty(userContacts);
        if(emptyBox && emptyBox.length){
             this.props.warning(emptyBox)
        }else{
            let validEmail = this.checkValidEmail(this.props.userContact.email)
            let validate = this.checkValidPhoneNo(this.props.userContact.number)
            
            !validate && this.emptyWarning('number')
            !validEmail && this.emptyWarning('email')

            if(validate && validEmail){
                this.props.edit(true)
                toast.success("Submitted",{
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 1000,
                  })
            }
        }
    }

    emptyWarning=(id)=>{
        let context = this
        id && context.setState({ 
            [id]:true 
        })
        id && context.props.warning([id])
       
        setTimeout(()=>{ 
            context.setState({
                [id]:false
            })
        },3000)
    }
    

  render() {
    let context = this
    const {userContact, setRef, edit, submitted} = this.props

    return (
        <div>
            <Row className="clearfix">
            <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Phone No</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag disabled={submitted} value={userContact.number} ref={(ref) => { setRef('number',ref) }} onChange={context.handleUserContactChange} type="tel" id="number"></InputTag>
                      </WD100>
                    </WD66>

                    <WD66 className="wd33" >
                      <WD100 className="textHolder" >
                        <p className="title clearfix">
                          <label className="LHS">Email</label>
                          <span className="star RHS">*</span>
                        </p>
                        <InputTag disabled={submitted} value={userContact.email} ref={(ref) => { setRef('email',ref) }} onChange={context.handleUserContactChange}  type="email" id="email"></InputTag>
                      </WD100>
                    </WD66>
            </Row>
            <div className="clearfix">
                <SaveBtn style={{display:'inline-block',textAlign:'center',color:'rgb(255, 255, 255)',padding:'10px',minWidth:'175px',borderRadius:'4px',display:'inline-block',backgroundColor:'rgb(12, 53, 83)',border:'1px solid rgb(12, 53, 83)'}} onClick={()=>{this.props.tabsStore.changeTab('first') }}>Previous</SaveBtn> 
                {!submitted?<SaveBtn style={{marginLeft:'5px',display:'inline-block',textAlign:'center',color:'rgb(255, 255, 255)',padding:'10px',minWidth:'175px',borderRadius:'4px',display:'inline-block',backgroundColor:'rgb(12, 53, 83)',border:'1px solid rgb(12, 53, 83)'}} onClick={()=>{ context.submitContacts() }}>submit</SaveBtn>:<SaveBtn style={{marginLeft:'5px',display:'inline-block',textAlign:'center',color:'rgb(255, 255, 255)',padding:'10px',minWidth:'175px',borderRadius:'4px',display:'inline-block',backgroundColor:'rgb(12, 53, 83)',border:'1px solid rgb(12, 53, 83)'}} onClick={()=>{ edit(false) }}>Already submitted, click here to edit</SaveBtn>}
            </div>
            <ToastContainer />
        </div>
    )
  }
}
