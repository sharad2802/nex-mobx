import styled from 'styled-components';
import { MenuLink, MainWrp, H2, H3, WD25, WD33, WD50, WD100, InputTag, TextHolderTag, SelectTag, Btn, ResetBtn, SaveBtn, ActionBtn, ActionBtnEdit, ActionBtnDownload, ActionBtnSave, ActionBtnDelete, Row, TAC, TAL, TAR, BrdrBtm, FlagBtnActive,FlagBtnDeActive, ActionBtnUl, MB10,SuccesStatus,ErrorStatus, LoaderStatus, ChooseImgForm, LHS, RHS, clearFix} from "./element";
// top header bar
const TopHeader = styled.header`
position:fixed;top:0;left:0;width:100%;z-index:999;background:rgb(255, 255, 255);box-shadow:0 -1px 4px 0 rgba(0,0,0,0.50);
    nav{padding:10px 20px 10px 10px;margin-left:66px;
        ul{
            li{
                .lucretia_logo,.profile{display:table;width:100%;
                    .td{display:table-cell;vertical-align:middle;}
                    .logo{width:400px;height:auto;padding-left:10px;
                        img{width:100%%;height:auto;}                        
                    }
                    span{font-size:22px;color:#6F6F6F;padding-left:6px}
                }
                .profile{
                    .td.WD38{width:38px}
                    .profile_img{width:38px;height:38px;border-radius:99%;position:relative;
                        img{width:100%;height:100%;border-radius:99%}
                        em{width:14px;height:14px;background:#FF0000;border:3px solid #FFFFFF;border-radius:99%;position:absolute;bottom:0px;left:0px}
                    }
                    span{font-size:14px;color:#6F6F6F;padding:0px 15px 0px 6px;display:block}
                    .profile_arrow_down{background-image:url("../static/images/hmiadmin/profile_icn_down.svg");background-position:right center;background-repeat:no-repeat;background-size:10px;}
                    .profile_arrow_up{background-image:url("../static/images/hmiadmin/profile_icn_up.svg");color:#000;}
                } 
            }
            .profile-popover{padding:5px 20px;background:#fff;border-radius:10px;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);position:absolute;top:50px;right:-5px;display:none;
                ul{
                    li{
                        a{padding:10px 0;border-bottom:1px solid #d8d8d8;font-size:14px;color:#6F6F6F}
                        a.btn_logout{background:url("../static/images/hmiadmin/logout.svg") no-repeat left center;padding-left:26px;}
                    }
                    li:last-child a{border:none;}
                }
            }
        }
    }

`;

// Aside Bar
const AsideBar = styled.section`
.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(37, 87, 123, 0.8);z-index:999}
.main-sidebar{position:fixed;top:0;left:0;bottom:0;padding-top:60px;min-height:100%;width:286px;-webkit-transition:-webkit-transform .3s ease-in-out,width .3s ease-in-out;-moz-transition:-moz-transform .3s ease-in-out,width .3s ease-in-out;-o-transition:-o-transform .3s ease-in-out,width .3s ease-in-out;transition:transform .3s ease-in-out,width .3s ease-in-out;background-color:rgba(37, 87, 123);z-index:1;overflow-y:auto}
.sidebar{padding-bottom:10px;
    .sidebar-menu{white-space:nowrap;overflow:hidden;
        li{
            a{display:table;width:100%;
                .td{display:table-cell;vertical-align:middle;
                    .sidebar-menu-icn{width:66px;height:60px;background-repeat:no-repeat;background-position:center;}                    
                    span{padding-left:10px;font-size:15px;color:#FFF;}
                }
                .td.WD60{width:66px;height:60px}
            }
            a:hover,a.active{background:rgb(12, 53, 83);}
        }
    }
}
 
`;

// Main Div
const MainDiv = styled.div`
{
    .wd25,.wd33,.wd50,.wd66{display:inline-block;float:left;
        .textHolder{border:1px solid #D3D3D3;border-radius:4px;padding:10px;width:calc(100% - 20px);background-color:#fff;min-height:90px;
            .title{margin-bottom:10px;font-size:14px;color:#5F5F5F;}  
        }
    }
    .star{color:rgba(255,0,0,1);font-size:14px;}
}
.tab{overflow:hidden;border-bottom:1px solid #ccc;
    button{background-color:#fff;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:0.3s;font-size:18px;color:#ABABAB;font-weight:bold;text-transform:uppercase;border-bottom:4px solid transparent;
        :hover{border-bottom:4px solid rgb(12, 53, 83);color:rgb(12, 53, 83);}            
    }
    button.active{border-bottom:4px solid rgb(12, 53, 83);color:rgb(12, 53, 83);}
}    
.tabcontent{display:none;padding:10px 0px;}
.para_list_style{display:list-item;list-style:disc;margin-left:15px;font-size:14px;color:#5F5F5F;margin-bottom:10px;}
.noBdr{border-top:1px solid transparent !important;border-bottom:1px solid transparent !important}
.sidebar-toggle{width:66px;height:60px;background-color:rgba(37, 87, 123, 0.8);background-repeat:no-repeat;background-position:center;position:fixed;top:0;left:0;z-index:9999}
.menu_icn{background-image:url("../static/images/hmiadmin/icn_menu_close.svg");}
.sidebar-mini.sidebar-collapse{
    .menu_icn{background-image:url("../static/images/hmiadmin/icn_menu.svg");}
}
.sidebar-mini.sidebar-collapse{
    .main-sidebar{-webkit-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0);transform:translate(0, 0);width:66px !important;}
    .sidebar-menu{
        li{
            a{
                .td{
                    span{display:none;-webkit-transform: translateZ(0);}
                }
            }
        }
    }
    .content-wrapper{margin-left:66px;}
    .overlay{width:66px}
}
`;

const ContainerWrp = styled.section`
padding:10px;border:1px solid #D3D3D3;border-radius:4px;background-color:#fff;margin:0px 15px;
    {
        .wd25,.wd33,.wd50,.wd66{display:inline-block;float:left;
            .textHolder{border:1px solid #D3D3D3;border-radius:4px;padding:10px;width:calc(100% - 20px);background-color:#fff;min-height:90px;
                .title{margin-bottom:10px;font-size:14px;color:#5F5F5F;}  
            }
        }
        .star{color:rgba(255,0,0,1);font-size:14px;}
    }
    .tab{overflow:hidden;border-bottom:1px solid #ccc;
        a{background-color:#fff;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:0.3s;font-size:18px;color:#ABABAB;font-weight:bold;text-transform:uppercase;border-bottom:4px solid transparent;
            :hover{border-bottom:4px solid #D95423;color:#D95423;}  
            a{color:#ABABAB}
            .active{border-bottom:4px solid #D95423;color:#D95423;}
        }
        a.active{border-bottom:4px solid #D95423;color:#D95423;}
    }    
    .tabcontent{display:none;padding:10px 0px;}
    .para_list_style{display:list-item;list-style:disc;margin-left:15px;font-size:14px;color:#5F5F5F;margin-bottom:10px;}
`;

const GridTable = styled.div`
overflow:hidden;overflow-x:auto;padding-bottom:10px;
    table{width:100%;border-collapse:collapse;
        tr,td,th{border:0.5px solid #D3D3D3;}
        tr:hover{background-color:#f5f5f5}
        tr.active{background-color:#f5f5f5}
        tr{
            td,th{padding:8px;font-size:15px;text-align:left;min-width:140px;max-width:140px;word-break:break-all;}
            th{font-weight:bold;color:#000;}
            td{color:#5F5F5F;vertical-align:top;
                p{font-size:14px;color:#5F5F5F;margin-bottom:10px;}
            }
            td.dataDate span,td.dataDate em{display:block;}
            td{
                .projectDetails{color:#5F5F5F;font-size:15px;min-width:200px}                
                {
                    li{margin-right:10px;border:1px solid #DDDDDD;border-radius:3px;display:inline-block;}
                    li:last-child{margin-right:0px;}
                }
                .party_logo,.candidate_logo{width:80px;height:80px;border-radius:99%;margin:0 auto;
                    img{width:100%;height:100%;border-radius:99%;}
                }
                .listContentTable{disply:block;}
            }
            td:last-child,th:last-child{min-width:80px;max-width:80px;}
        }
    }
`;

const Login = styled.div`
display:table;width:100%;height:100%;position:absolute;top:0;left:0;
    .td{display:table-cell;vertical-align:middle;width:50%;}
    .blue_bg{background:#427DC1;
        .dh_luc_logo{width:262px;margin:0 auto;
            .logo{display:inline-block;background:url("../static/images/hmiadmin/logo_lucretia.svg") no-repeat center center;width:262px;height:36px;}
            span{font-size:12px;color:#FFFFFF;float:right;}
        }
    }

    .white_bg{background:#FFFFFF;
        .ggl_login{width:360px;margin:0 auto;}
        a{display:inline-block;padding:13px 20px;box-shadow:0 0px 2px 0 rgba(0,0,0,0.50);border-radius:4px;cursor:pointer;
            em{font-size:14px;color:#606060;display:inline-block;background:url("../static/images/hmiadmin/icn_google.svg") no-repeat left center;background-size:30px 30px;padding:3px 0px 3px 40px;}
        }
    }
    .msgBox{position:absolute;bottom:20px;left:calc(50% - 125px);padding:14px 16px;background:#1C1C1C;color:#FAFAFA;border-radius:4px;box-shadow:0 0 4px 1px rgba(0,0,0,0.30);font-size:16px;}
`;

// Module Icons
const ModuleIcon = styled.div`
    width:66px;height:60px;background-repeat:no-repeat;background-position:center;background-size:24px;
`;

const HomeIcn = styled(ModuleIcon)`
    background-image:url("../static/images/hmiadmin/icn_home.svg");
`;

const AboutIcn = styled(ModuleIcon)`
    background-image:url("../static/images/hmiadmin/icn_about.svg");
`;

const CategoryIcn = styled(ModuleIcon)`
    background-image:url("../static/images/hmiadmin/icn_category.svg");
`;

const PhotographyIcn = styled(ModuleIcon)`
    background-image:url("../static/images/hmiadmin/icn_photography.svg");
`;

const LogoutIcn = styled(ModuleIcon)`
    background-image:url("../static/images/hmiadmin/icn_logout.svg");
`;

const CareerIcn = styled(ModuleIcon)`
background-image:url("../static/images/hmiadmin/icn_logout.svg");
`;
const WelcomeUl = styled.ul`
    li{width:24%;display:inline-block;margin-right:1%;margin-bottom:10px;
        a{border:1px solid #D3D3D3;
            .td{display:table-cell;vertical-align:middle;
                p{padding-left:10px;font-size:15px;color:#5F5F5F;}
            }
            .td.WD60{width:66px;height:60px;background:#1F2432;}
        }
        a:hover,a.active{
            .td{
                .create_role{background-image:url("../static/images/hmiadmin/icn_create_role_hover.svg");}
                .create_project{background-image:url("../static/images/hmiadmin/icn_create_project_hover.svg");}
                .create_user{background-image:url("../static/images/hmiadmin/icn_create_user_hover.svg");}
                .user_project{background-image:url("../static/images/hmiadmin/icn_user_project_details_hover.svg");}
                .json_converter{background-image:url("../static/images/hmiadmin/icn_json_converter_hover.svg");}
                .localization_string{background-image:url("../static/images/hmiadmin/icn_localization_string_api_hover.svg");}
                .static_file_upd{background-image:url("../static/images/hmiadmin/icn_static_file_updater_hover.svg");}
                .redis_caching{background-image:url("../static/images/hmiadmin/icn_redis_caching_hover.svg");}
                .h2i_icon{background-image:url("../static/images/hmiadmin/icn_h2i_hover.svg");}
                .com_score{background-image:url("../static/images/hmiadmin/icn_comscore_hover.svg");}
                .logout{background-image:url("../static/images/hmiadmin/icn_logout_hover.svg");}
            }
        
    }
`;


const HeadingWrp = styled.section`
    ${LHS}{
         
    }
    ${RHS}{
        .loader{
            width:50px;padding-right:20px;
            img{width:100%;height:auto}
        }
    }
    ${clearFix()} 
`;

const TestMsg = styled.div`
    position:fixed;bottom:200px;color:#fff;font-size:14px;padding:15px;width:100px;left:calc(50% - 100px);text-align:center;border-radius:4px;text-transform:capitalize;
    &&.green{background:rgb(1 154 48)}
    &&.red{background:rgb(239 5 5)}
`;

const PhotoGalleryCont = styled.div`
    

`;

const LoginWrp = styled.div`
    display:table;width:100%;height:100%;position:absolute;top:0;left:0;
    .td{display:table-cell;vertical-align:middle;width:50%;
        .inputFiled{width:100%;margin-bottom:20px;
            input{width:100%;padding:15px;border-radius:4px}
        }
    }
    .blue_bg{background:#fff;
        .dh_luc_logo{width:262px;margin:0 auto;
            .logo{display:inline-block;background:url("../static/images/hmiadmin/logo.svg") no-repeat center center;width:262px;height:36px;}
            span{font-size:12px;color:#000;float:right;}
        }
    }

    .white_bg{background:rgb(12,53,83);
        .ggl_login{width:360px;margin:0 auto;}
       
    }
    .msgBox{position:absolute;bottom:20px;left:calc(50% - 125px);padding:14px 16px;background:#1C1C1C;color:#FAFAFA;border-radius:4px;box-shadow:0 0 4px 1px rgba(0,0,0,0.30);font-size:16px;}
`;

export {MainDiv, TopHeader, AsideBar, ContainerWrp, GridTable, Login, WelcomeUl, ModuleIcon, HomeIcn, AboutIcn, CategoryIcn, PhotographyIcn, LogoutIcn, HeadingWrp, TestMsg, PhotoGalleryCont, LoginWrp, CareerIcn};
