import {getClient} from './utils.js'

async function updateTodo(todoId: number) {
    const client = await getClient()

    const updatetodotext=" UPDATE todos SET done=$1 WHERE id= $2"
    await client.query(updatetodotext,[true,todoId])

    console.log(`TODO with id ${todoId} updated`)

}
updateTodo(1)