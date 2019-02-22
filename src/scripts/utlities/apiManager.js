const API = {
    GET: (string) => {
        return fetch(`http://127.0.0.1:8088/${string}`)
            .then(response => response.json())
    },
    POST: (string, object) => {
        return fetch(`http://127.0.0.1:8088/${string}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
    },
    EDIT: (string, object) => {
        return fetch(`http://127.0.0.1:8088/${string}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(res => res.json())
    },
    DELETE: (string) => {
        return fetch(`http://127.0.0.1:8088/${string}`, {
            method: "DELETE"
        }).then(response => response.json())
    }
}

export default API