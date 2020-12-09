import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee Full Name:</label>
                            <div>{this.state.employee.fullName}</div>
                        </div>
                        <div className="row">
                            <label>Age:</label>
                            <div>{this.state.employee.age}</div>
                        </div>
                        <div className="row">
                            <label>Email:</label>
                            <div>{this.state.employee.email}</div>
                        </div>
                        <div className="row">
                            <label>Phone Number:</label>
                            <div>{this.state.employee.phoneNumber}</div>
                        </div>
                        <div className="row">
                            <label>Position:</label>
                            <div>{this.state.employee.position}</div>
                        </div>
                        <div className="row">
                            <label>Number Days Off:</label>
                            <div>{this.state.employee.numberDaysOff}</div>
                        </div>
                        <div className="row">
                            <label>Total Days Off:</label>
                            <div>{this.state.employee.totalDaysOff}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;