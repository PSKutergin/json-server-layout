import { render } from "./render";

export const changePermissions = () => {
    const tbody = document.getElementById('table-body')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('input[type=checkbox]')) {
            const tr = e.target.closest('tr')
            const input = tr.querySelector('input[type=checkbox]')
            const id = tr.dataset.key

            userService.sendUsers({
                url: `http://localhost:4545/users/${id}`,
                data: { permissions: input.checked },
                method: 'PATCH'
            }).then(res => {
                userService.getUsers().then(users => {
                    render(users)
                })
            })
        }
    })
}