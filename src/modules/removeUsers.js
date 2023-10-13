import { render } from "./render"

export const removeUsers = () => {
    const tbody = document.getElementById('table-body')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key

            userService.sendUsers({
                url: `http://localhost:4545/users/${id}`,
                method: 'DELETE'
            }).then(res => {
                userService.getUsers().then(users => {
                    render(users)
                })
            })
        }
    })
}