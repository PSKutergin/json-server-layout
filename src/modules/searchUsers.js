import { render } from "./render";
import { debounce } from "./helpers";

export const searchUsers = () => {
    const input = document.getElementById('search-input');

    const debounceSearch = debounce(() => {
        userService.getUsers(`http://localhost:4545/users?name_like=${input.value}`).then(users => {
            render(users);
        })
    }, 500)

    input.addEventListener('input', debounceSearch);
}