import { render } from "./render";

export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById('sort-is-children');

    let isSort = false;

    headerSortIsChildren.style.cursor = 'pointer';

    headerSortIsChildren.addEventListener('click', () => {
        const sortOptions = {
            name: 'children',
            value: isSort ? 'asc' : 'desc'
        }

        userService.getUsers(`http://localhost:4545/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(users => {
            render(users);
        });

        isSort = !isSort;
    })


}