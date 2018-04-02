
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                    <div style={{padding: '20px'}}>
                    <center><h1><u>Team Members</u></h1></center>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <img src="/assets/rahul.jpg"
                                style={{
                                    height: '144px',
                                    width: '173px',
                                }} />
                        </div>
                        <div style={{paddingLeft: '20px', width: '800px'}}>
                        <div><b><u>Designation:</u></b> Senior Consultant</div>
                        <div>
                            Rahul is working as a senior software developer with Xebia and has 6+ years of 
                            experience in web technologies. He is passionate about learning new technologies.
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}


About.defaultProps = {

}

About.propTypes = {

}