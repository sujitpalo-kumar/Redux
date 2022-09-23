import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile = () => {
    return(
        <React.Fragment>
                <div className="row">
                    <div className="col">
                        <p className="h4 text-secondary">Your Profile</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <GithubProfileCard/>
                    </div>
                    <div className="col-md-9">
                        <GithubProfileDetails/>
                    </div>
                </div>
        </React.Fragment>
    )
};
export default GithubProfile;
