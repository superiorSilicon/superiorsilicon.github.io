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
