function GithubResult(props) {
    console.log(props);

    return (
        <div className="result">
            <h3>Results for: {props.user.login}</h3>
            <p>Name: {props.user.name}</p>
            <p>
                {props.user.public_repos} Public Repos{' '}
                <span>{props.user.followers} Followers</span>
            </p>
            <a href={props.user.html_url} target="_blank" rel="noreferrer">
                Visit Your Github
            </a>
        </div>
    );
}

export default GithubResult;
