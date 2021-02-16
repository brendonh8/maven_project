import React, { SyntheticEvent, useState } from 'react';
import Wrapper from "./Wrapper";
import { Redirect } from 'react-router-dom';

const AppointmentsCreate = () => {
    const [starttime, setStarttime] = useState('');
    const [userid, setUserid] = useState('');
    const [minutes, setMinutes] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                start_datetime: starttime,
                user_id: userid,
                minutes: minutes
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/'} />
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Start DateTime, Format: YYYY-MM-DD HH:mm</label>
                    <input type="text" className="form-control" name="title"
                        onChange={e => setStarttime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control" name="image"
                        onChange={e => setUserid(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Minutes</label>
                    <input type="text" className="form-control" name="image"
                        onChange={e => setMinutes(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default AppointmentsCreate;