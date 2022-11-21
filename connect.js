var axios = require('axios');
const { privateEncrypt } = require('crypto');
// let us = 0
// var data = JSON.stringify({
//     "collection": "Accounts",
//     "database": "Gamification-Database",
//     "dataSource": "Gamification-Cluster",
//     "projection": {
//         "_id": us,
//         "UID": us,
//         "Login": us,
//         "Password": us,
//         "Name": us,
//         "Surname": us,
//         "Class": us,
//         "Group": us,
//         "Points": us,
//         "InPoints": us,
//         "OutPoints": us,
//     }
// });

// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-ohxzd/endpoint/data/v1/action/findOne',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': '7NncCa9VIkemRX4RlrWvtkb4ukxHNU9aw27MUUdN5KV8tUicem1Z8AYHFuUcG96O',
//     },
//     data: data
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
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
                'Content-Type': 'application/json',
                'api-key': '7NncCa9VIkemRX4RlrWvtkb4ukxHNU9aw27MUUdN5KV8tUicem1Z8AYHFuUcG96O'
            }
        }
    );
    console.log(JSON.stringify(get.data.document))
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
                'Content-Type': 'application/json',
                'api-key': '7NncCa9VIkemRX4RlrWvtkb4ukxHNU9aw27MUUdN5KV8tUicem1Z8AYHFuUcG96O'
            }
        }
    );
}
gett("TestLogin", "TestPasw1");
// postt("U3", "TestLogin", "TestPasw","TestName", "TestSurname", 8,"MILFs", 0, 0, 0);
// gett("U3");
            
            
