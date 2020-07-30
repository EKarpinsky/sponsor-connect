import React from "react";

function Browse() {

    let users = [
        {
            id: 0,
            username: "karpizzle",
            fullname: "Eli Karpinsky",
            mediums: ["Video", "Podcast"],
            socials: [
                {
                    url: "https://www.youtube.com/channel/UCzVSOJdZrXkHpwNsKAZoxMw",
                    name: "YouTube",
                    followers: 134053
                },
                {
                    url: "https://www.facebook.com/Karpizzle/",
                    name: "Facebook",
                    followers: 1340
                }
            ]

        },
        {
            id: 1,
            username: "mitchwebsite",
            fullname: "Eli Karpinsky",
            mediums: ["Video"],
            socials: [
                {
                    url: "https://www.youtube.com/channel/UCzVSOJdZrXkHpwNsKAZoxMw",
                    name: "YouTube",
                    followers: 134
                },
                {
                    url: "https://www.facebook.com/MitchWebsite/",
                    name: "Facebook",
                    followers: 13
                }
            ]
        }
    ];

    let userTable = users.map(user => {
        return (
            <tr>
                <th scope={"row"}>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.mediums.join(", ")}</td>
                <td><ul>{user.socials.map(social => {
                        return (
                            <li><a href={social.url}>{social.name}</a> ({social.followers})</li>
                        );
                    }
                )
                }</ul></td>
                <td><button className={"btn btn-primary"}>CONNECT NOW</button> </td>
            </tr>
        );
    })

    return (
        <div className={"container-fluid"}>
            <h1 className={"page-heading mt-5"}>Browse Creators</h1>
            <table className={"table mt-5"}>
                <thead>
                <tr>
                    <th scope={"col"}>ID</th>
                    <th scope={"col"}>Username</th>
                    <th scope={"col"}>Medium(s)</th>
                    <th scope={"col"}>Social Links</th>
                    <th scope={"col"}/>
                </tr>
                </thead>
                <tbody>
                {userTable}
                </tbody>
            </table>

        </div>
    );
}

export default Browse;
