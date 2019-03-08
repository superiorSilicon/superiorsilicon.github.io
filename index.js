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

var themesAjax = new XMLHttpRequest();
themesAjax.open('get', './themes.json');
themesAjax.onreadystatechange = function() {
    if (themesAjax.status == 200 && themesAjax.readyState == 4) {
        var themes = JSON.parse(themesAjax.responseText);
        for (var i = 0; i < themes.length; i++) {
            var theme = themes[i];
            var name = theme.name;
            var description = theme.description;
            var url = theme.url;
            var screenshot = theme.screenshot;

            var themeElement = document.createElement('div');
            themeElement.className = 'theme';
            var nameElement = document.createElement('div');
            nameElement.className = 'name';
            nameElement.innerText = name;
            var descriptionElement = document.createElement('div');
            descriptionElement.className = 'description';
            descriptionElement.innerText = description;
            var buttonsElement = document.createElement('div');
            buttonsElement.className = 'buttons';
            var installElement = document.createElement('a');
            installElement.className = 'install-css';
            installElement.href = url;
            installElement.innerText = 'Install';
            var screenshotElement = document.createElement('div');
            screenshotElement.className = 'screenshot';
            screenshotElement.dataset.url = screenshot;
            screenshotElement.innerText = 'View Screenshot';

            buttonsElement.appendChild(installElement);
            buttonsElement.appendChild(screenshotElement);

            themeElement.appendChild(nameElement);
            themeElement.appendChild(descriptionElement);
            themeElement.appendChild(buttonsElement);

            document.querySelector('.themes').appendChild(themeElement);

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
        }
    }
}
themesAjax.onerror = function(err) {
    console.log(error)
}
themesAjax.send();
