import React from 'react';
import './Card.css'


const Card = props => {


    let userCards = props.users.map(user => {
        return (
            <div className='card mt-4 mr-3'>
                <div className='card-body'>
                    {user.profile_image &&
                    <img className='card-img-top' src={'http://localhost:1337' + user.profile_image.formats.medium.url}
                         alt='User profile picture'/>}
                    <h5 className='card-title text-center mt-2'><a href={'#'}>{user.username}</a></h5>
                    <h6 className='card-subtitle mb-2 text-muted'>Mediums</h6>
                    <p className='card-text'>
                        <ul className={'pl-3'}>{user.mediums.map(medium => {
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
                    </p>
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
