var badgr_url = window.location.href;

function get_badge_id(url){
    var parts = String(url).split('/');
    return parts.pop() || parts.pop();
}

function go_toClaim() {
    window.location.href = "https://badge-claim.herokuapp.com/badgeid/" + get_badge_id(badgr_url);
}

function add_button() {
    var button = document.createElement("button");
    button.innerHTML = "Claim Badge";
    button.className = "button button-primary";
    button.id = "claim_btn";

    var div_element = document.getElementsByClassName("l-stack")[0];
    var p_element = div_element.getElementsByTagName("p")[0];
    p_element.parentNode.insertBefore(button, p_element.nextSibling);

    button.addEventListener ("click", function() {
        go_toClaim();
    });
}

setTimeout(function(){
    if (!document.getElementById('claim_btn')) {
        add_button();
    }
}, 1000);