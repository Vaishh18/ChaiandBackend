require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

const githubData ={
  
    "login": "Vaishh18",
    "id": 109457185,
    "node_id": "U_kgDOBoYvIQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/109457185?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vaishh18",
    "html_url": "https://github.com/Vaishh18",
    "followers_url": "https://api.github.com/users/Vaishh18/followers",
    "following_url": "https://api.github.com/users/Vaishh18/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vaishh18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vaishh18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vaishh18/subscriptions",
    "organizations_url": "https://api.github.com/users/Vaishh18/orgs",
    "repos_url": "https://api.github.com/users/Vaishh18/repos",
    "events_url": "https://api.github.com/users/Vaishh18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vaishh18/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vaishnavi Patil",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2022-07-17T08:00:38Z",
    "updated_at": "2024-04-03T10:31:13Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(rq,res)=>{
    res.send('vaishcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai and backend</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai and backend</h2>")
})


app.get("/github",(req,res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})