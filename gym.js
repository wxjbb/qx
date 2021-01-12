let obj = JSON.parse($response.body);
obj.data.name = "xjbb";
obj.data.avatar = "b6d42043981f10fb0cfdc440a393ffa7";
$done({
    body: JSON.stringify(obj)
});
