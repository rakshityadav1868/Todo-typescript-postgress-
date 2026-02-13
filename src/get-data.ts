import {getClient}from './utils.js'


async function getUsers() {
    const client = await getClient()
    const selectedUserText='SELECT * FROM users'
    const userRes= await client.query(selectedUserText)
    for (let user of userRes.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`)
    }
}

async function getUserfromEmail(email:string) {
    const client= await getClient()
    const selectedUserText='SELECT * FROM users WHERE email=$1'
    const userRes= await client.query(selectedUserText,[email])

    for (let user of userRes.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`)
    }
}


async function getTodosfromUsers(userId:number) {
    const client= await getClient()
    const selectedTodoText=' SELECT * FROM todos WHERE user_id=$1'
    const todoRes= await client.query(selectedTodoText,[userId])
    for (let todo of todoRes.rows){
        console.log(`ID: ${todo.id}, title: ${todo.tile}`)
    }
}


getUsers()
getUserfromEmail("abwjajdhaw@gmail.com")
getTodosfromUsers(1)