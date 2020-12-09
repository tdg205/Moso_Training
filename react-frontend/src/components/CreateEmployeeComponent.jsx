import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fullName: '',
            age: 0,
            email: '',
            phoneNumber: '',
            position: '',
            numberDaysOff: 0,
            totalDaysOff: 0
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeNumberDaysOffHandler = this.changeNumberDaysOffHandler.bind(this);
        this.changeTotalDaysOffHandler = this.changeTotalDaysOffHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    fullName: employee.fullName,
                    age: employee.age,
                    email: employee.email,
                    phoneNumber: employee.phoneNumber,
                    position: employee.position,
                    numberDaysOff: employee.numberDaysOff,
                    totalDaysOff: employee.totalDaysOff
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            fullName: this.state.fullName, age: this.state.age, email: this.state.email,
            phoneNumber: this.state.phoneNumber, position: this.state.position, numberDaysOff: this.state.numberDaysOff,
            totalDaysOff: this.state.totalDaysOff
        };
        console.log('employee => ' + JSON.stringify(employee));

        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeFullNameHandler = (event) => {
        this.setState({fullName: event.target.value});
    }

    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});

    }

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changePositionHandler = (event) => {
        this.setState({position: event.target.value});
    }

    changeNumberDaysOffHandler = (event) => {
        this.setState({numberDaysOff: event.target.value});
    }

    changeTotalDaysOffHandler = (event) => {
        this.setState({totalDaysOff: event.target.value});
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Full Name:</label>
                                        <input placeholder="Full Name" name="fullName" className="form-control"
                                               value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Age:</label>
                                        <input placeholder="Age" name="age" className="form-control"
                                               value={this.state.age} onChange={this.changeAgeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number:</label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                               value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Position:</label>
                                        <input placeholder="Position" name="position" className="form-control"
                                               value={this.state.position} onChange={this.changePositionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Number Days Off:</label>
                                        <input placeholder="Number Days Off" name="numberDaysOff"
                                               className="form-control"
                                               value={this.state.numberDaysOff}
                                               onChange={this.changeNumberDaysOffHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Total Days Off:</label>
                                        <input placeholder="Total Days Off" name="totalDaysOff" className="form-control"
                                               value={this.state.totalDaysOff}
                                               onChange={this.changeTotalDaysOffHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;