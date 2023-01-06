window.location.replace = function(a) {};

if (document.readyState !== 'loading') {
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        
        myInitCode();
    });
}



function myInitCode() {
    const autoplay = document.querySelector("[data-name='autoplay']");
    if(autoplay) {
        if(autoplay.getElementsByClassName('fa-check-circle').length === 0) {
            autoplay.click()
        }
        
    }

    const autonext = document.querySelector("[data-name='autonext']");
    if(autonext) {
        if(autonext.getElementsByClassName('fa-check-circle').length === 0) {
            autonext.click()
            alert("hey")
        } 
    }

    document.getElementsByClassName('nav')[0].remove();
    document.getElementById('comment').remove();
    document.getElementById('controls').remove();
    document.getElementsByClassName('bl-2')[0].remove();
    document.getElementsByTagName('footer')[0].remove();
    document.title = "eyes down there"
    document.getElementsByClassName("watch-extra")[0].remove();

};

