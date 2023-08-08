const employee={
}
function updateEmployeeWithKeyAndValue(obj,key,value){
    return {
        ...obj,
        [key]:value
    } 
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return obj;
}


function deleteFromEmployeeByKey(object,key){
    const employeeByKey={...object}
    delete employeeByKey[key]
    return employeeByKey

}

function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object[key]
    return object
}

   
    
  






