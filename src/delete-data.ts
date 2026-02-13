import {getClient} from "./utils.js"

async function deleteTodos(todoId: number) {
    const client = await getClient()
    const deletedTodoText=" DELETE FROM todos WHERE id=$1"
    await client.query(deletedTodoText,[todoId])

    console.log(` TODO with Id ${todoId} deleted`)

}
deleteTodos(1)