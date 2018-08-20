function getProfile(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;

    if (!username || username == '') {
        username = 'bradtraversy';
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML = `<div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}">
                    </div>
                    <div class="col-md-9">
                        <span class="label label-primary">Public Repos: ${user.public_repos}</span>
                        <span class="label label-success">Public Gists: ${user.public_gists}</span>
                        <span class="label label-info">Followers: ${user.followers}</span>
                        <span class="label label-warning">Following: ${user.following}</span>
                        <span class="label label-danger">Member Since ${user.created_at.substring(0, 4)}</span>
                        <span class="label label-default">Last Active: ${user.updated_at.substring(0,10)}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                        </ul>
                        <a class="btn btn-default" target="_blank" href="${user.html_url}">Visit Github</a>
                    </div>
                </div>
            </div>
        </div>`;
        }
    }
    xhttp.open('GET', `https://api.github.com/users/${username}`, true);
    xhttp.send();
}

document.getElementById('userForm').addEventListener('submit', getProfile);
//document.querySelector('form').addEventListener('submit', test);