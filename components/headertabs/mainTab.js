import { Component,Fragment } from 'react'
import {toJS} from 'mobx';
import { inject, observer} from 'mobx-react'
// import Link from 'next/link'
import { MenuLink, MainWrp, H2, H3, WD25, WD33, WD66,  WD50, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, ActionBtn, ActionBtnEdit, ActionBtnDownload, ActionBtnSave, ActionBtnDelete, Row, TAC, TAL, TAR, BrdrBtm, FlagBtnActive,FlagBtnDeActive, ActionBtnUl, MB10,SuccesStatus,ErrorStatus, LoaderStatus, ChooseImgForm, RHS, LHS } from "@/styles/element";
const ls = require('local-storage');


@observer
export default class MainTabs extends Component {
    
    render() {
        let context = this;
        const {activeTab} = this.props;
        console.log('{{activeTab}}', this.props,activeTab,activeTab=='a1')
        return (
            <Fragment>
             <div className="tab">
                  {/* <Link href="/firstassignment" passHref={true}> */}
                    <a href="/firstassignment" className={activeTab=='a1'?'active':''}>ASSIGNMENT 1</a>
                  {/* </Link> */}
                  {/* <Link href="/secondassignment" passHref={true}> */}
                    <a href="/secondassignment" className={activeTab=='a2'?'active':''}>ASSIGNMENT 2</a>
                  {/* </Link> */}
                  {/* <Link href="/employee" passHref={true}> */}
                    <a href="/employee" className={activeTab=='a3'?'active':''} >ASSIGNMENT 3</a>
                  {/* </Link> */}
                    
              </div>
            </Fragment>
        )
    }
}
