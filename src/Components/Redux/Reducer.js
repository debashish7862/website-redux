
var initialData={
    name:"deb",
    products:[]
}


const basicReducer=(storeData=initialData,action)=>{
    if(action.type=='name'){
        return{
            name:action.userName,
        }
    }else if(action.type==="products"){
        return{
           ...storeData,
           products:action.payLoad
        }
    }

    return storeData;
}

export default basicReducer;