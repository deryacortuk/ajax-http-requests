class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    delete(url, callback) {
        this.xhr.open("DELETE", url);

        this.xhr.onload = () => {

            if (this.xhr.status === 200) {
                callback(null, "successful");
            } else {
                callback("delete request:An error occurred", null);

            }

        };
        this.xhr.send();
    }

}
const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/515", function(err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});