import {getClient} from './utils.js'

async function createTable() {
    const client= await getClient()
    
    // Drop existing tables to recreate them
    await client.query(`DROP TABLE IF EXISTS todos`)
    await client.query(`DROP TABLE IF EXISTS users`)
    
    const createuserTableQuery=`
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )
    `

    await client.query(createuserTableQuery)

    const createTodosQuery=`
    CREATE TABLE todos(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
    )
    `
    await client.query(createTodosQuery)
    console.log("Table created sucesfully")
}
createTable()