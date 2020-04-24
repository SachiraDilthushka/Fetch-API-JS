document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

// get text file
function getText(){
    fetch('text.txt')
        .then(function (respnse) {
            return respnse.text();
        }).then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML= data;
        }).catch(function(err){
            console.log(err);
        });
}


//get JSON file
function getJSON(){
    fetch('posts.json')
        .then(function (respnse) {
            return respnse.json();
        }).then(function (data) {
            console.log(data);
            let output ='';
            data.forEach(function(post){
                output+=`<li>${post.title}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        }).catch(function(err){
            console.log(err);
        });
}



//get from external API
function getAPI(){
    fetch('https://api.github.com/users')
        .then(function (respnse) {
            return respnse.json();
        }).then(function (data) {
            console.log(data);
            let output ='';
            data.forEach(function(user){
                output+=`<li>${user.login}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        }).catch(function(err){
            console.log(err);
        });
}