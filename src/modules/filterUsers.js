import { render } from "./render";

export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren');
    const btnIsPermissions = document.getElementById('btn-isPermissions');
    const btnIsAll = document.getElementById('btn-isAll');

    btnIsChildren.addEventListener('click', () => {
        userService.getUsers(`http://localhost:4545/users?children=true`).then(users => {
            render(users);
        })
    });

    btnIsPermissions.addEventListener('click', () => {
        userService.getUsers(`http://localhost:4545/users?permissions=true`).then(users => {
            render(users);
        })
    });

    btnIsAll.addEventListener('click', () => {
        userService.getUsers().then(users => {
            render(users);
        })
    });
}