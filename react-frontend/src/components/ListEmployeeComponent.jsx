import React, {Component} from "react";
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
           this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Position</th>
                                <th>Number Days Off</th>
                                <th>Total Days Off</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.fullName}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phoneNumber}</td>
                                        <td>{employee.position}</td>
                                        <td>{employee.numberDaysOff}</td>
                                        <td>{employee.totalDaysOff}</td>
                                        <td>
                                            <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)}
                                                className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)}
                                                className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployeeComponent