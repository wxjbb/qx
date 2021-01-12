const body = $response.body;

let obj = JSON.parse(body);

obj.data.name = "xjbb";

$done({
    body: JSON.stringify(obj)
});
