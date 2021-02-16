import React, { PropsWithChildren } from 'react';
import Menu from "../components/Menu";

const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Scheduler</a>
            </nav>
            <div className="container-fluid">
                <div className="row">

                    <Menu />

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;