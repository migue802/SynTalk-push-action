const core = require('@actions/core');
const github = require('@actions/github');

try {
    const axios = require('axios').default;
    var destinationList = core.getInput('destinationList');;
    var originList = core.getInput('targetList');;
    var key = core.getInput('key');
    var token = core.getInput('token');

    // Get cards on the origin list and move them on the destination list
    axios.get(`https://api.trello.com/1/lists/${originList}/cards?key=${key}&token=${token}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            response.data.forEach(card => {
                axios.put(`https://api.trello.com/1/cards/${card.id}/?idList=${destinationList}&key=${key}&token=${token}`)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        })
        .catch(function (error) {
            core.setFailed(error.message);
        });


  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}