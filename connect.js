const axios = window.axios;
async function gett(login, password){
    const get = await axios.post(
        'https://data.mongodb-api.com/app/data-ohxzd/endpoint/data/v1/action/findOne',
        // '{\n      "dataSource": "Gamification-Cluster",\n      "database": "Gamification-Database",\n      "collection": "Accounts",\n      "filter": {}\n  }',
        {
            'dataSource': 'Gamification-Cluster',
            'database': 'Gamification-Database',
            'collection': 'Accounts',
            'filter': {
                'Login': login,
                'Password': password,
            }
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'api-key': '7NncCa9VIkemRX4RlrWvtkb4ukxHNU9aw27MUUdN5KV8tUicem1Z8AYHFuUcG96O'
            }
        }
    );
    console.log(JSON.stringify(get.data.document))
    return JSON.stringify(get.data.document);
}
async function postt(UId, LoginVar, PaswVar, NameVar,SurnameVar,ClassVar,GroupVar,PointsVar,InPVar,OutPVar){
    const post = await axios.post(
        'https://data.mongodb-api.com/app/data-ohxzd/endpoint/data/v1/action/insertOne',
        // '{\n      "dataSource": "Gamification-Cluster",\n      "database": "Gamification-Database",\n      "collection": "Accounts",\n      "filter": {}\n  }',
        {
            'dataSource': 'Gamification-Cluster',
            'database': 'Gamification-Database',
            'collection': 'Accounts',
            'document': {
                "UID": UId,
                "Login": LoginVar,
                "Password": PaswVar,
                "Name": NameVar,
                "Surname": SurnameVar,
                "Class": ClassVar,
                "Group": GroupVar,
                "Points": PointsVar,
                "InPoints": InPVar,
                "OutPoints": OutPVar,
            }
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'api-key': '7NncCa9VIkemRX4RlrWvtkb4ukxHNU9aw27MUUdN5KV8tUicem1Z8AYHFuUcG96O'
            }
        }
    );
}
function checkLogin(){
    let login = document.getElementById('Login').innerText;
    let password = document.getElementById('Password').innerText;
    if (gett(login, password) != null){
        alert(gett(login, password))
        // window.location.replace("http://www.w3schools.com");
    }
}
let btn = document.querySelector('button');
btn.addEventListener('click', checkLogin);
// gett("TestLogin", "TestPasw");   
// postt("U3", "TestLogin", "TestPasw","TestName", "TestSurname", 8,"MILFs", 0, 0, 0);
// gett("U3");
            
            
