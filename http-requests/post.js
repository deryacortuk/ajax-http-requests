class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);

            } else {
                callback("an error occured", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

}
const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums", { userId: 7, title: "winner" }, function(err, response)

    {
        if (err === null) {
            console.log(response);
        } else {
            console.log(err);
        }
    })