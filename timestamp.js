(function() {
    console.log(
        "Discord Timestamp Formatter - Sapphire Tools\n" +
        "Version 1.0.2"
    );

})();

function Generate() {
    var output = document.getElementById("output");
    var dt = document.getElementById("datetime").value;
    var format = document.getElementById("format").value;
    var utc = new Date(dt).getTime() / 1000;

    output.innerHTML = "<t:" + utc + ":" + format + ">";
    output.style.display = "inline-block";
    document.getElementById("copy").style.display = "inline";
}

function Copy(elementId) {
    var item = document.getElementById(elementId).innerHTML;
    navigator.clipboard.writeText(item).then(

    function() {
        // Success
        console.log("Copied to clipboard.");
        document.getElementById("copy_notif").innerHTML = "Copied! :)"
        document.getElementById("copy_notif").style.color = "greenyellow"
        Show("copy_notif")

    },
    function() {
        // Failure
        console.log("Copy to clipboard failed!");
        document.getElementById("copy_notif").innerHTML = "Failed to copy! :("
        document.getElementById("copy_notif").style.color = "red"
        Show("copy_notif")
    });
}

function Show(elementId) {
    var item = document.getElementById(elementId);
    item.style.display = "inline";

    setTimeout(() => {
        item.style.display = "none";
    }, 5.0 * 1000);
}
