import {getClient}from './utils.js'

async function createEntries() {
    const client = await getClient()
    const insertUserText= ' INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id'  // sql injection/vurnabilites ki wjh se kra hai ye ki $1,$2
    const userValues=['rakshit434145677623@gmail.com','happy3232@gmail.com']

    let response= await client.query(insertUserText,userValues)
    const insertTodotext=" INSERT INTO todos (title,description,user_id,done) VALUES ($1,$2,$3,$4)"
    const todoValues=["buy things","milk, bread and eggs",response.rows[0].id,false]
    await client.query(insertTodotext,todoValues)
    console.log("Entries created")

}
createEntries()