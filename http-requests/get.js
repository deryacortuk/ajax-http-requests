class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = function() {

            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("get request:An error occurred", null);

            }

        }
        this.xhr.send();
    }

}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums", function(err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});