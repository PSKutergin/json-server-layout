export class UserService {
    getUsers(url = 'http://localhost:4545/users') {
        return fetch(url).then(res => res.json())
    };

    sendUsers({ url, data = {}, method }) {
        return fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
    };
}