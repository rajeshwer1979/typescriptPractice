var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(departmentName, id) {
        this.departmentName = departmentName;
        this.id = id;
        // public departmentName:string;
        // public readonly id : string;
        this.employees = [];
        //    console.log(this.departmentName);
        this.id = id;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        var _this = _super.call(this, 'Accounting', 'ACC1') || this;
        _this.reports = [];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (!this.lastReport) {
                throw new Error('Report Not Present');
            }
            return this.lastReport;
        },
        set: function (value) {
            if (!value) {
                throw new Error('Report can not be inserted');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.addEmployee = function (employeeName) {
        if (employeeName != 'Raju') {
            _super.prototype.addEmployee.call(this, employeeName);
        }
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Department is ' + this.departmentName);
    };
    return AccountingDepartment;
}(Department));
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment() {
        var _this = _super.call(this, 'Information Department', 'IT1') || this;
        _this.admins = [];
        return _this;
    }
    ItDepartment.prototype.addAdmin = function (name) {
        this.admins.push(name);
    };
    return ItDepartment;
}(Department));
var accounting = new AccountingDepartment();
accounting.addReport('Report 1 generated');
accounting.addEmployee('Raju');
console.log(accounting);
accounting.describe();
var itDepartment = new ItDepartment();
itDepartment.addAdmin('Raju');
itDepartment.addEmployee('Raju');
console.log(itDepartment);
// const department = new Department('InfortmatTech', 'IT1');
// department.addEmployee('Raju');
// department.addEmployee('Rani');
// department.printEmployees();
// department.id = 'IT';
// console.log(department);
