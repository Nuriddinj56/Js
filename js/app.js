const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
// console.log(todos)
// ssetTodos to Localstorage
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))

}
function showMessage(where, message) {
    document.getElementById(`${where}`).textContent = message
    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    }, 2500)
}

// get todos

formCreate.addEventListener('click', (e) => {
    e.preventDefault()

    const todosText = formCreate['input-create'].value.trim()
    formCreate.reset()
    if (todosText.length) {
        todos.push({ text: todosText, time: '18:58,21.01.2024', comleted: false })
        setTodos()
    } else {
        showMessage('message-create', "Please,enter some text...")
    }
})
