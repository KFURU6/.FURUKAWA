function get_textbox_value(name) {
    const element = document.querySelector(`input[type=text][name="${name}"]`);
    if(element.value) {
        return element.value;
    } else {
        return ""
    }
}

function ask_before_changing_page(event) {
    event.preventDefault();
    event.returnValue = "";
}

document.getElementById("contact-submit").addEventListener("submit", function() {
    const dummy_send_target = document.createElement("iframe");
    dummy_send_target.style.display = "none";
    dummy_send_target.name = "dummy_send_target";
    document.getElementById("contact-submit").appendChild(dummy_send_target);

    const form_iframe = document.createElement("iframe");
    form_iframe.src = encodeURI(`https://docs.google.com/forms/u/0/d/e/1FAIpQLSefANOc4bKqFL2JbNL02MhSwKxYjHI1-XB2O1zrGfnO0iEqNA/formResponse&submit=Submit`);
    form_iframe.style.display = "none";
    document.getElementById("contact-submit").appendChild(form_iframe);

    form_iframe.addEventListener("load", function() {
        document.getElementById("contact-submit").remove();
        document.getElementById("words_of_thanks").style.display = "block";
        window.removeEventListener("beforeunload", ask_before_changing_page, false);
    });
});

window.addEventListener("beforeunload", ask_before_changing_page);