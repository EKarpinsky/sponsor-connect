import React, {useState, useEffect} from 'react';

function Browse() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:1337/users')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    let userTable = users.map(user => {


        return (
            <tr>
                <th scope={'row'}>{user.id}</th>
                <td>{user.username}</td>
                <td>
                    <ul>{user.mediums.map(medium => {
                            return (
                                Object.keys(medium).map((keyName, i) => {
                                        if (medium[keyName] === true) {
                                            return (
                                                <li key={i}>{keyName}</li>
                                            )
                                        }
                                    }
                                )
                            );
                        }
                    )
                    }
                    </ul>
                </td>
                <td>
                    <ul>{user.social_links.map(social => {
                            return (
                                Object.keys(social).map((keyName, i) => {
                                        if (keyName !== 'id') {
                                            return (
                                                <li key={i}><a
                                                    href={social[keyName].url}>{keyName}</a> ({social[keyName].followers})</li>
                                            )
                                        }
                                    }
                                )
                            );
                        }
                    )
                    }</ul>
                </td>
                <td>
                    <button className={'btn btn-primary'}>CONNECT NOW</button>
                </td>
            </tr>
        );
    });

    if (!isLoaded)
        return (<div>Loading...</div>);
    else if (error)
        return (<div>Error fetching data</div>);
    else {
        return (
            <div className={'container-fluid'}>
                <h1 className={'page-heading mt-5'}>Browse Creators</h1>
                <table className={'table mt-5'}>
                    <thead>
                    <tr>
                        <th scope={'col'}>ID</th>
                        <th scope={'col'}>Username</th>
                        <th scope={'col'}>Medium(s)</th>
                        <th scope={'col'}>Social Links</th>
                        <th scope={'col'}/>
                    </tr>
                    </thead>
                    <tbody>
                    {userTable}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Browse;
