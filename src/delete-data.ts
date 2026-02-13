import {getClient} from "./utils.js"

async function deleteTodos(todoId: number) {
    const client = await getClient()
    const deletedTodoText=" DELETE FROM todos WHERE id=$1"
    await client.query(deletedTodoText,[todoId])

    console.log(` TODO with Id ${todoId} deleted`)

}
deleteTodos(1)


// in production u never actually delete data u just create a coloum of delete and when delete is run u just set it to true


//DROP SYNTAX
// DROP TABLE IF EXISTS todos;

// or 

// DROP TABLE ${todos.title}