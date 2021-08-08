function submit() {
    var id = document.getElementById("id").value
    var ps = document.getElementById("ps").value
    if (id == "007") {
        if (ps == "yinandyang") {
            console.log("win dad")
            window.location.href="Spy_dad.html";}
        else {}
            console.log("fail password wrong")}
    else {
        console.log("fail id wrong")
        if (id == "003")
            if (ps == "yinandyang"){
                console.log("win ash")
                window.location.href="Spy_ash.html";}
            else
                console.log("fail password wrong in ash")
        else
            console.log("fail id wrong in ash")}
}

function dad_jaru() {
    var code_dad = document.getElementById("code_dad").value
    if (code_dad == "1285") {
        window.location.href="Spy_jaru_1285.html";}
    else
        console.log("failed code")
}

function ash_jaru() {
    var code_ash = document.getElementById("code_ash").value
    if (code_ash == "5489") {
        window.location.href="Spy_jaru_1285.html";}
    else
        console.log("failed code")
}

function apollo() {
    var code = document.getElementById("code").value
    if (code == "11615121215"){
        window.location.href="Spy_success.html";}
}