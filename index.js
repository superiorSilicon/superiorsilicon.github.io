var photoAjax = new XMLHttpRequest();
photoAjax.open('get', './currentprofilepic.json');
photoAjax.onreadystatechange = function() {
    if (photoAjax.status == 200 && photoAjax.readyState == 4) {
        var url = JSON.parse(photoAjax.responseText).url;
        document.getElementById('useravatar').setAttribute('src', url);
        document.getElementById('favicon').setAttribute('href', url);
    }
}
photoAjax.onerror = function(err) {
    console.log(error)
}
photoAjax.send();

var screenshots = document.querySelectorAll('.screenshot');
var screenshotModal = new tingle.modal({
    onClose: function() {
        screenshotModal.setContent('');
    }
});

for (var i = 0; i < screenshots.length; i++) {
    var screenshotElement = screenshots[i];
    var screenshotURL = screenshotElement.dataset.url;
    screenshotElement.addEventListener('click', function(e) {
        screenshotModal.setContent('<img class="screenshot-img" src="' + screenshotURL + '">');
        screenshotModal.open();
    });
}
