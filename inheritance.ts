class Department{
   // public departmentName:string;
   // public readonly id : string;
    private employees:string[]=[];

    constructor(public departmentName:string, public id:string){
    //    console.log(this.departmentName);
             this.id = id;
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployees(){
        console.log(this.employees);
    }
}

class AccountingDepartment extends Department{
    public reports:string[] = [];
    private lastReport:string;

    constructor(){
        super('Accounting', 'ACC1');
    }

    get mostRecentReport(){
       if(!this.lastReport){
        throw new Error('Report Not Present');
       }
       return this.lastReport;
    }
    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Report can not be inserted');
        }
        this.addReport(value);
    }
    addReport(report:string){
        this.reports.push(report);
        this.lastReport = report;
    }
    addEmployee(employeeName: string): void {
        if(employeeName != 'Raju'){
            super.addEmployee(employeeName);
        }
    }
    describe(){
        console.log('Department is ' + this.departmentName);
        
    }
  
}

class ItDepartment extends Department{
    public admins:string[] = [];
    constructor(){
        super('Information Department', 'IT1');
    }
    addAdmin(name:string){
        this.admins.push(name);
    }
}

const accounting = new AccountingDepartment();
accounting.addReport('Report 1 generated');
accounting.addEmployee('Raju');
console.log(accounting);
accounting.describe();

let itDepartment = new ItDepartment();
itDepartment.addAdmin('Raju');
itDepartment.addEmployee('Raju');
console.log(itDepartment);


// const department = new Department('InfortmatTech', 'IT1');
// department.addEmployee('Raju');
// department.addEmployee('Rani');
// department.printEmployees();
// department.id = 'IT';
// console.log(department);
