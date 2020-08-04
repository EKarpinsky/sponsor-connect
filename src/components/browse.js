import React, {useState, useEffect} from 'react';
import Card from './Card/Card';

function Browse() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cardView, setCardView] = useState(true);

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

    return (
        <div className={'container-fluid'}>
            <h1 className={'page-heading mt-5'}>Browse Creators</h1>
            <div className='btn-group-toggle d-flex justify-content-start' data-toggle='buttons'>
                <label
                    className={
                        cardView === true
                            ? 'btn btn-light radio-inline mr-2 px-3 active'
                            : 'btn btn-light radio-inline mr-2 px-3'}>
                    <input type='radio' name='optradio' onChange={() => setCardView(true)}/>Card view</label>
                <label
                    className={
                        cardView === false
                            ? 'btn btn-light radio-inline px-3 active'
                            : 'btn btn-light radio-inline px-3'}>
                    <input type='radio' name='optradio' onChange={() => setCardView(false)}/>List view</label>
            </div>
            {cardView && <Card users={users}/>}
            {!cardView && <table className={'table mt-5'}>

                <thead>
                <tr>
                    <th scope={'col'}>ID</th>
                    <th scope={'col'}>Username</th>
                    <th scope={'col'}>Medium(s)</th>
                    <th scope={'col'}>Social Links</th>
                    <th scope={'col'}/>
                </tr>
                </thead>
                <tbody className={'mt-3'}>

                {!isLoaded && <tr>
                    <td>Loading...</td>
                </tr>}
                {error && <tr>
                    <td>Error fetching data</td>
                </tr>}
                {!error && isLoaded &&

                userTable

                }

                </tbody>
            </table>}

        </div>
    );

}

export default Browse;
