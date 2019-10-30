(function ($) {
    const repositoryUrl = 'https://api.github.com/repos/itaditya/got-death-quiz/contributors';
    const users = [];

    const template =
    '<div class="col s3">\
        <div class="card hoverable">\
            <div class="card-image">\
                <img class="activator" src="[AVATAR_IMAGE_SRC]" alt="">\
                <a href="[GITHUB_LINK]" target="_blank" class="btn-floating halfway-fab waves-effect waves-light grey darken-4">\
                    <i class="material-icons">link</i>\
                </a>\
            </div>\
            <div class="card-content">\
                <a href="[GITHUB_LINK]" target="_blank">\
                    <span class="card-title activator grey-text text-darken-4">[NICKNAME]</span>\
                </a>\
                <p>Contributions: [GITHUB_CONTRIBUTIONS]</p>\
                <p></p>\
            </div>\
        </div>\
    </div>';

    $.get(repositoryUrl, function (contributors) {
        contributors
            .forEach((contributor) => {
                if (!contributor.login || users.includes(contributor.url)) {
                    return;
                }

                let templateToFill = template;

                templateToFill = templateToFill.replace('[AVATAR_IMAGE_SRC]', contributor.avatar_url);
                templateToFill = templateToFill.replace('[NICKNAME]', contributor.login);
                templateToFill = templateToFill.replace('[GITHUB_LINK]', contributor.html_url);
                templateToFill = templateToFill.replace('[GITHUB_LINK]', contributor.html_url);
                templateToFill = templateToFill.replace('[GITHUB_CONTRIBUTIONS]', contributor.contributions);

                $('#contributors').append(templateToFill);

                users.push(contributor.url);
            })
    })
})($);
