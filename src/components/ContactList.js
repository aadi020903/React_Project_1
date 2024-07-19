import React from "react";

const ContactList = () => {
    return (
        <div className="main">
            <h2>Contact List</h2>
            <div className="ui celled list">
                <div className="item">
                    <img className="ui avatar image" src="https://via.placeholder.com/150" alt="user" />
                    <div className="content">
                        <div className="header">John Doe</div>
                        <div>
                            <i className="user icon"></i>
        </div>
                    </div>
                    <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
                </div>
            </div> 
        </div>
    );
}


export default ContactList;