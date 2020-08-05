import React from 'react';
import './Card.css'
import noUserImage from './1_a-HXhG_PoTygNXqwp9KHMA.jpeg';

const Card = props => {

    let userCards = props.users.map(user => {
        return (

            <div className='card mt-4 mr-3'>
                <div className='card-body'>

                    <img className='card-img-top' src={user.profile_image !== null
                        ? 'http://localhost:1337' + user.profile_image.formats.medium.url
                        : noUserImage}
                         alt='User profile'/>
                    <h5 className='card-title text-center mt-2'><a href={'#'}>{user.username}</a></h5>
                    <h6 className='card-subtitle mb-2 text-muted'>Mediums</h6>
                    <ul className={'pl-3 card-text'}>{user.mediums.map(medium => {
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
                    {user.social_links.map(social => {
                            return (
                                Object.keys(social).map((keyName, i) => {
                                        if (keyName !== 'id') {
                                            return (
                                                <a href={social[keyName].url}
                                                   className='card-link' rel='noopener noreferrer' target='_blank'>{keyName}</a>
                                            );
                                        }
                                    }
                                )
                            );
                        }
                    )
                    }
                </div>
            </div>
        );
    });


    return (
        <div data-testid='Card' id={'card-grid'} className={'d-flex flex-wrap'}>
            {userCards}
        </div>
    );
}
export default Card;
