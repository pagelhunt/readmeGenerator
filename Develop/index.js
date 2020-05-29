const fs = require("fs");
const inquirer = require("inquirer");
//const api = require('./utils/api');
const axios = require("axios")


function getUser(username) {
      return axios.get(`https://api.github.com/users/${username}`)
      .catch(error => {
        error
      });
    }


inquirer.prompt(
    [
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your GitHub E-mail:"
        },
        {
            type: "input",
            name: "title",
            message: "Input title of project:"
        },
        {
           type: "input",
           name: "description",
           message: "Enter project description:"
        },
        {
            type: "input",
            message: "Enter you installation process:",
            name: "installation"
        },
        {
            type: "input",
            message: "What is usage of your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter any project liscenses:",
            name: "license"
        },
        {
            type: "input",
            message: "Enter any contributers:",
            name: "contributers"
        }
    ]
)
.then(function(response)
{   
    getUser(response.username).then(function(res)
    {
        console.log(res);
        const avatar = res.data.avatar_url;
        //const userEmail = res.data.email;

        var dispAvatar = "<img src = '" + avatar + "'/>"
        var respData =
    [
        "Name: ", response.username, "\n",
        "Email: ", response.email, "\n",
        "Image: ", dispAvatar, "\n",
        "Title: ", response.title, "\n",
        "Description: ", response.description, "\n",
        "Installation: ", response.installation, "\n",
        "Usage: ", response.usage, "\n",
        "Liscense: ", response.license, "\n",
        "Contributors: ", response.contributers, "\n"
        
    ]
    writeToFile("README.md", respData);

        console.log(response.title);
        console.log("File written allegedly")
    })    
})

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data.join(""), function(err)
    {
        if(err)
        {
            throw err;
        }
    })
}