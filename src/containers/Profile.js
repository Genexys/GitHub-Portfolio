import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from "../components/Link/Link";
import List from "../components/List/List";

const ProfileContainer = styled.div`
    width: 50%;
    margin: 20px auto;
`;

const ProfileAvatar = styled.img`
    display: block;
    width: 150px;
    margin: 0 auto 20px;
`;

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            data: {},
            repos: [],
            loading: true,
            error: ''
        }
    }

    async componentDidMount() {
        try {
            const profile = await fetch(`https://api.github.com/users/Genexys`);
            const profileJSON = await profile.json();

            if (profileJSON) {
                const repos = await fetch(profileJSON.repos_url);
                const reposJSON = await repos.json();

                this.setState({
                    data: profileJSON,
                    repos: reposJSON,
                    loading: false,
                })
            }
        } catch (error) {
            console.error(error.message)

            this.setState({
                loading: false,
                error: 'что то поломалось..(('
            })
        }
    }

    render() {
        const { data, repos, loading, error } = this.state;

        const arrData = [
            {label: 'html_url', value: <Link url={data.html_url} title="GitHub url" />},
            {label: 'repos_url', value: data.repos_url},
            {label: 'name', value: data.name},
            {label: 'company', value: data.company},
            {label: 'location', value: data.location},
            {label: 'email', value: data.email},
            {label: 'bio', value: data.bio}
        ]


        const reposList = repos.map(repo => ({
            label: repo.name,
            value: <Link url={repo.html_url} title="link" />
        }))
        if (loading) return <div>Loading...</div>;

        if (loading || error) return (loading ? <div>Loading...</div> : error);

        return (
            <ProfileContainer>
                <ProfileAvatar src={data.avatar_url} alt="avatar"/>

                <List titleList="Profile" arr={arrData} />

                <List titleList="Projects" arr={reposList} />
            </ProfileContainer>
        );
    }
}

Profile.propTypes = {
    data: PropTypes.object,
};

export default Profile;
