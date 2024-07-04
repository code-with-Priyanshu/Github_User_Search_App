const api = "https://api.github.com/users/"

const operation = (username) => {
    fetch(api + username).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        const content = `
            <div class="image">
                    <img src="${data.avatar_url}"
                        alt="" id="avatar">
                </div>
                <div class="inside-cont">
                    <div class="profile">
                        <h2 id="name">${data.name}</h2>
                        <div class="follow-list">
                            <h5 id="follower">followers: ${data.followers}</h5>
                            <h5 id="following">following: ${data.following}</h5>
                            <h5 id="Repo_Count">Repos: ${data.public_repos}</h5>
                        </div>
                        <div class="location">
                            <h5 id="loc">location: ${data.location}</h5>
                            
                        </div>
                        <div class="bio-profile">
                            <h2 id="bio-head">Bio</h2>
                            <p id="bio-content">${data.bio}</p>
                        </div>

                    </div>

                </div>
        
        `
        document.getElementById('cont').innerHTML = content;
        // getRepos(username)
    }).catch(() => {
        console.log('An error occurred');
    })

}

const getRepos=(username) => {
    fetch(api+username+"/repos").then((response)=>{
        return response.json();
    }).then((data)=>{
        const push=document.querySelector("#repos");
        data.forEach(item => {
            const ele=document.createElement('a');
            ele.classList.add('repo')
            ele.href=item.html_url;
            ele.innerText=item.name;
            ele.target="_blank";
            push.appendChild(ele);
        });
    })
}
const formSubmit=()=>{
    const name=document.querySelector("#input");
    if(name.value!=""){
        operation(name.value)
        getRepos(name.value)
        document.getElementById('input').value=""
        
    }
    return false;
}

// operation("code-with-Priyanshu")
// getRepos("code-with-Priyanshu")