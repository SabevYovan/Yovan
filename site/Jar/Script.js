function sayHello () {
    var name = document.getElementById("name").Value;
    var message = "<h2>Hello " + name + "!</h2>";

    document.getElementById("content").innerHTML = message;
    if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("#title").textContent = title;
    }
}