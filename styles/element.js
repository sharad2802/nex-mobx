import styled from "styled-components";

// clearfix (common)
function clearFix() {
    return `
      &:after {
        content:" ";display:block;clear:both;line-height:0;height:0
      }
    `;
};
 


// create LHS & RHS
const LHS = styled.div`float:left;`;
const RHS = styled.div`float:right;`;

// create a
const MenuLink = styled.a`
    cursor:pointer;
`;

// TAC
const TAC =styled.div`
    text-align:center;
`;

// TAR
const TAR =styled.div`
    text-align:right;
`;

// TAL
const TAL =styled.div`
    text-align:left;
`;

const MainWrp = styled.section`
    margin:60px;padding-top:20px;
`;

const StatusWrp = styled.div`
    position:fixed;bottom:50px;left:50%;transform:translateX(-50%);padding:10px;color:#fff;border-radius:4px;font-size:16px;
`;

const SuccesStatus = styled(StatusWrp)`
    background:#5AAB00;
`;

const ErrorStatus = styled(StatusWrp)`
    background:#D0021B;
`;

const LoaderStatus = styled(StatusWrp)`
    width:40px;height:40px;background:url("../../static/images/hmiadmin/loading_icon.webp") no-repeat center center;background-size:100%;
`;

// Button
const Btn = styled(MenuLink)`
    padding:10px;min-width:175px;border-radius:4px;text-transform:capitalize;display:inline-block;font-size:16px;text-align:center;cursor:pointer;
    margin:${props => props.margin};
    width:${props => props.width};
`;
const ResetBtn = styled(Btn)`
    border:1px solid #D0D0D0;color:#7A7A7A;
`;

const SaveBtn = styled(Btn)`
    color:red;background-color:rgb(12,53,83);color:#fff;border:1px solid rgb(12,53,83);
`;

const AddProjRoleBtn = styled(Btn)`
    background-color:#00667A;color:#fff;border:1px solid #00667A;
`;

const ActionBtnUl = styled.ul`
    text-align:center;margin:auto;    
    width:${props => props.width};
`;

// icon action buttons
const ActionBtn = styled(MenuLink)`
    width:40px;height:40px;background-size:20px auto;background-repeat:no-repeat;background-position:center center;cursor:pointer;
`;

const ActionBtnEdit = styled(ActionBtn)`
    background-image:url("../../static/images/hmiadmin/btn_edit.svg");
    :hover{background-image:url("../../static/images/hmiadmin/btn_edit_hover.svg");}
    .active{background-image:url("../../static/images/hmiadmin/btn_edit_hover.svg");}
    
`;

const ActionBtnSave = styled(ActionBtn)`
    background-image:url("../../static/images/hmiadmin/btn_save.svg");
    :hover{background-image:url("../../static/images/hmiadmin/btn_save_hover.svg");}
    .active{background-image:url("../../static/images/hmiadmin/btn_save_hover.svg");}

`;

const ActionBtnDelete = styled(ActionBtn)`
    background-image:url("../../static/images/hmiadmin/btn_trash.svg");background-size:17px auto;
    :hover{background-image:url("../../static/images/hmiadmin/btn_trash_hover.svg");background-size:17px auto}
    .active{background-image:url("../../static/images/hmiadmin/btn_trash_hover.svg");background-size:17px auto}

`;
const ActionBtnDownload = styled(ActionBtn)`
    background-image:url("../../static/images/hmiadmin/btn_download.svg");background-size:17px auto;
    :hover{background-image:url("../../static/images/hmiadmin/btn_download_hover.svg");background-size:17px auto}
    .active{background-image:url("../../static/images/hmiadmin/btn_download_hover.svg");background-size:17px auto}
`;

const ActionBtnCancel = styled(ActionBtn)`
    background-image:url("../../static/images/hmiadmin/btn_cancel.svg");
    :hover{background-image:url("../../static/images/hmiadmin/btn_cancel_hover.svg");}
    .active{background-image:url("../../static/images/hmiadmin/btn_cancel_hover.svg");}
`;

const ActionBtnSearch = styled(ActionBtn)`
    background-image:url("../../static/images/hmiadmin/btn_search.svg");
`;

// Status flag buttons
const FlagBtn = styled(MenuLink)`
    display:block;border-radius:4px;padding:6px 15px;text-transform:capitalize;color:#fff;text-align:center;cursor:default;
`;

const FlagBtnActive = styled(FlagBtn)`
    background-color:#5AAB00;
`;

const FlagBtnDeActive = styled(FlagBtn)`
    background-color:#D0021B;
`;

const FlagBtnPending = styled(FlagBtn)`
    background-color:#D1D413;
`;

// create h2
const H2 = styled.h2`
font-size:22px;color:#6F6F6F;border-left:6px solid rgb(12, 53, 83);padding-left:6px;margin-bottom:10px;text-transform:uppercase;margin-left:25px;
`;

const H3 = styled.h3`
    color:#5F5F5F;font-size:16px;margin-bottom:10px;font-weight:bold;text-transform:uppercase;
    ${LHS}{
        margin-top:10px;
    }
`;

// row
const Row= styled.section`
    margin-bottom:30px;
`;

// common width
const WD25 = styled.div`
    width:25%;
`;

const WD33 = styled.div`
    width:33.33%;
`;

const WD50 = styled.div`
    width:50%;
`;

const WD66 = styled.div`
    width:66.6%;
`;

const WD100 = styled.div`
    width:100% !important;
`;

const InputTag = styled.input`
    width:100%;padding:10px;font-size:14px;color:#5f5f5f;border:1px solid #e0dcdc;
    :focus{border-color:#5f5f5f;outline:none}
`;
const TextHolderTag = styled.textarea`
    width:100%;padding:10px;font-size:14px;color:#5f5f5f;resize:none;height:36px;padding:8px;border:1px solid #e0dcdc;display:block;
    :focus{border-color:#5f5f5f;outline:none}
`;
const SelectTag = styled.select`
    width:100%;padding:10px;font-size:14px;color:#5f5f5f;background-color:#fff;padding:10px 0;border:1px solid #e0dcdc;
    :focus{border-color:#5f5f5f;outline:none}
`;

// Border bottom
const BrdrBtm = styled.div`
    border-bottom:1px solid #D3D3D3;padding-bottom:20px;
`;

// No Border
const NoBrdr = styled.div`
    border-top:1px solid transparent !important;border-bottom:1px solid transparent !important
`;

const MB10 = styled.div`
    margin-bottom:10px;
`;

const LabelModule = styled.label`
    display:block;position:relative;padding-left:30px;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#5F5F5F;line-height:18px;margin-bottom:24px;
        input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}
        .checkmark{position:absolute;top:0;left:0;height:18px;width:18px;background-color:#fff;border-radius:1px;border:1px solid #D3D3D3;}
        input:checked ~ .checkmark {background-color:#1F2432;border:none;}
        .checkmark:after {content:"";position:absolute;display:none;}
        input:checked ~ .checkmark:after{display:block;}
`;

const ChooseImgForm = styled.form`
    label,input{font-size:14px;color:#5F5F5F;}
    input[type="file" i]{width:200px;margin-top:10px;}
    .change_img{position:relative;width:100px;height:100px;box-shadow:0 0 4px 0 rgba(0,0,0,0.20);border-radius:99%;
        img{width:100%;height:100%;border-radius:99%;}
    }
    .close_img{width:20px;height:20px;position:absolute;top:0px;right:0px;background:url("../../static/images/hmiadmin/close.png") no-repeat center}
    .td{display:table-cell;vertical-align:middle;}
    .PL20{padding-left:20px;}
`;

const NotificationBlock = styled.ul`
    li{box-shadow:0px 0px 3px 0 rgba(0,0,0,0.50);padding:10px;margin-bottom:10px;
        span{font-size:14px;}
        .alreadyMarked{background-color:#17AB13;background-image:url("../../static/images/hmiadmin/icn_tick.svg");background-repeat:no-repeat;background-position:10px center;color:#fff;padding-left:30px}
    }
    :last-child{margin-bottom:0}

`;

const ArrowBtns = styled(MenuLink)`
    float:left;width:36px;height:36px;background:${props => props.background};margin:0 15px 0 0;
    opacity:${props => props.opacity}
`;

//Search Box
const SearchBox = styled(RHS)`
    input{width:auto;padding:11px 10px;}
    a{float:right;background-color:#ddd;}
`;

// const NextArrowBtn = styled(ArrowBtns)`
//     background:url("../../static/images/hmiadmin/btn_next.svg") no-repeat center;
// `;

// const PreviousArrowBtn = styled(ArrowBtns)`
// background:url("../../static/images/hmiadmin/btn_prev.svg") no-repeat center;
// `;

export {LHS, RHS, MenuLink, MainWrp, H2, H3, WD25, WD33, WD50, WD66, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, AddProjRoleBtn, ActionBtnUl, ActionBtn, ActionBtnEdit,ActionBtnSave, ActionBtnDelete, ActionBtnDownload, ActionBtnCancel, ActionBtnSearch, FlagBtn, FlagBtnActive, FlagBtnDeActive, Row ,TAC, TAL, TAR, BrdrBtm, NoBrdr, MB10, StatusWrp, SuccesStatus, ErrorStatus, LoaderStatus, LabelModule, ChooseImgForm, NotificationBlock, ArrowBtns,  FlagBtnPending, SearchBox , clearFix};
