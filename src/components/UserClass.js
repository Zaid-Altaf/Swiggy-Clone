import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Chennai",
            },
        };
    };


    componentDidUpdate() {
        console.log(" Component has been updated");
    }

    componentWillUnmount() {
        console.log("Component has been unmounted");
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Zaid-Altaf");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    };

    render() {
        const { login, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src="{avatar_url}" alt="" />
                <h2>Name : {login}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @Zaid-Altaf </h4>
            </div>
        )
    };
};

export default UserClass;