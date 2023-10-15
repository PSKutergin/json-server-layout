export class UserService {
    getUsers = async (url = 'http://localhost:4545/users') => {
        try {
            const res = await fetch(url)

            return await res.json()
        } catch (error) {
            throw new Error("Произошла ошибка, данных нет!")
        }

        // return fetch(url)
        //     .then(res => res.json())
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