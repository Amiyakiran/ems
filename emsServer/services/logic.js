const db = require('./db')


//all-employee
const allEmployees = () =>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

//add employee

const addEmployee = (id,uname,age,desg,salary)=>{
    console.log(uname);
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employee id already exist"
            }
        }
        else{
           const newEmp = new db.Employee({ 
            id,
            uname,
            age,
            desg,
            salary
        })

            newEmp.save()
            return{
                statusCode:200,
                message:"Employee added successfully"
            }

        }
    })
}

//delete employe
const removeEmp = (id)=>{
        return db.Employee.deleteOne({
            id
        }).then((result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"employee deleted successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"no data available"
                }
            }
        })
}

//get a particular employee details
 const getAnEmp = (id)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
 }

 //update employee
 const editEmp = (id,uname,age,desg,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            result.id = id
            result.uname = uname
            result.age = age
            result.desg = desg
            result.salary = salary

            result.save()
            return{
                statusCode:200,
                message:"data updated successfully"
            }

        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
 }

module.exports = {
    allEmployees,
    addEmployee,
    removeEmp,
    getAnEmp,
    editEmp
}