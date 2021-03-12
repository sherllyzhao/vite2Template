import {apiRoot} from "./api";
import https from "../axios";

//post json
const SAVESERVICEADMIN = apiRoot+"/serviceUser/saveServiceUser";  //请求的地址
export const saveServiceAdmin = function (params) {
    return https(SAVESERVICEADMIN , params,"post");
};

//get
const GETSERVICELIST = apiRoot+"/serviceUser/ServiceUserData";  //请求的地址
export const getServiceList = function (params) {
    return https(GETSERVICELIST , params);
};

