class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            } else {
                callback("Put Request: an error occured", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
}
const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/13", { userId: 17, title: "victory" }, function(err, response)

    {
        if (err === null) {
            console.log(response);
        } else {
            console.log(err);
        }
    })