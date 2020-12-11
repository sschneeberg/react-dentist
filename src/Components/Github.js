import React, { useState } from 'react';
import axios from 'axios';

import GithubResult from './GithubResults';

function Github() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://api.github.com/users/${username}`;
        axios
            .get(url)
            .then((result) => {
                setUser(result.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="Github">
            <form onSubmit={handleSubmit}>
                <h1>Find Your Github Profile Info</h1>
                {user ? <GithubResult user={user} /> : null}
                <label htmlFor="username">Enter your github username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default Github;
