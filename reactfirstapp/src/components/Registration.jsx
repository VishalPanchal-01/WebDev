import React, { useState } from 'react';

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmittedData({
            name: name,
            email: email,
            password: password
        });
    };

    return (
        <div className="container mt-3">

            <h1 className="big-warning mt-3 text-center">
                Registration Form
            </h1>

            <form onSubmit={handleSubmit}>

                name:
                <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <br />

                email:
                <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <br />

                password:
                <input
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <br />

                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit
                </button>

            </form>

            {/* Display values after Submit */} 
            {submittedData && (
                <div className="mt-4">

                    <h3>Submitted Values</h3>

                    <p>
                        <strong>Name:</strong> {submittedData.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {submittedData.email}
                    </p>

                    <p>
                        <strong>Password:</strong> {submittedData.password}
                    </p>

                </div>
            )}

        </div>
    );
};

export default Registration;