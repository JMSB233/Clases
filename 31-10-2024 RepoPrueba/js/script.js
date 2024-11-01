const APIURL = "http://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getuser(username){

    try {
        const {data} = await axios(APIURL + username);
        createCard(data);

    } catch (error) {
        console.log(error);
    }
}

function createCard(user){
    const cardhtml = `
    <div class="card">
        <img src="${user.avatar_url}" alt="${user.login} class="avatar">
    </div>
    <div class="card-info">    
        <h2>${user.login}</h2>
        <p>Followers: ${user.bio}</p>

        <ul>
            <li
        <a href="${user.html_url}" target="_blank">Visitar Github</a>
    </div>`
}
