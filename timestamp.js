(function() {
    console.log(
        "Discord Timestamp Formatter - Sapphire Tools\n" +
        "Version 1.0.0 | Released 7/20/2021 8:00 PM \n"
        );
})();

function Generate() {
    var output = document.getElementById("output");
    var dt = document.getElementById("datetime").value;
    var format = document.getElementById("format").value;
    var utc = new Date(dt).getTime() / 1000;

    output.innerHTML = "<t:" + utc + ":" + format + ">";
}

function Copy(elementId) {
    var item = document.getElementById(elementId).innerHTML;
    navigator.clipboard.writeText(item).then(function() {
        console.log("Copied to clipboard.");
    },
    function() {
        console.log("Copy to clipboard failed!");
    });
}
