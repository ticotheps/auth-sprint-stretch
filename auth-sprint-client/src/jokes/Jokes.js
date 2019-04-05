import React from "react";
import axios from "axios";

class Jokes extends React.Component {
    state = {
        jokes: []
    }

    render() {
        const token = localStorage.getItem('token');

        if (!token) {
            return <h3>Please login to see some dad jokes!</h3>;
        } else {
            return (
                <div>
                    <h2>List of Dad Jokes</h2>
                    <div>
                        {this.state.jokes.map(j => (<h3 key={j.id}>{j.joke}</h3>))}
                    </div>
                </div>
            );
        }

    }

    componentDidMount() {
        const endpoint = 'http://localhost:3300/api/jokes';
        const token = localStorage.getItem('token');

        const reqOptions = {
            headers: {
                authorization: token,
            }
        };

        axios
            .get(endpoint, reqOptions)
            .then(res => {
                console.log(res);
                this.setState({ jokes: res.data });
            })
            .catch(error => {
                console.log(error);
                console.error(error);
            });
    }   
}

export default Jokes;