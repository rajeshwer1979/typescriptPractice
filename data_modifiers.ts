//public members can be accessed anywhere without any restrictions.

class Employee {
    public empCode: string;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";


class Employee {
    private empCode: number;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati";//OK

//private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class
class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

//protected members can be accessed using their deriving classes.
class SalesEmployee extends Employee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
emp.empCode; //Compiler Error