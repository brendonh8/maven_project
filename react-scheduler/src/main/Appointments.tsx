import React, { useEffect, useState } from 'react';
import Wrapper from "./Wrapper";
import {Appointment} from "../interfaces/appointment"
import {Link} from "react-router-dom";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/appointments');

                const data = await response.json();

                setAppointments(data);
            }
        )();
    }, []);

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/create' className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Appointment Start</th>
                            <th>User ID</th>
                            <th>Minutes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(
                            (a: Appointment) => {
                            return (
                                <tr key={a.id}>
                                    <td>{a.id}</td>
                                    <td>{a.start_datetime}</td>
                                    <td>{a.user_id}</td>
                                    <td>{a.minutes}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default Appointments;