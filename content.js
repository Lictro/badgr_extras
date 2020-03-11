function get_badge_id(url){
    var parts = String(url).split('/');
    return parts.pop() || parts.pop();
}

function go_toClaim() {
    var badgr_url = window.location.href;
    window.location.href = "https://badge-claim.herokuapp.com/badgeid/" + get_badge_id(badgr_url);
}

function add_button() {
    var $input = 
        $('<button type="button" id="claim_btn" class="button button-primary"> Claim Badge </button>')
            .click(go_toClaim);
    $("body").find("div.l-stack").last().find("button").before($input);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === 'add_claim') {
        setTimeout(function(){
            if($("#claim_btn").length == 0) {
                add_button();
            }
        }, 1000);
      }
});