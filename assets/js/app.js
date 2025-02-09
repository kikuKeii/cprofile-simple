const url = "./assets/db/database.json";
$.getJSON(url, function (dataJson) {
    if (dataJson) {
        let data = dataJson.data;
        $('#cloader').remove();

        data.nav_links.forEach(function (link) {
            let a = $('<a class="nav-link fw-bold link-primary" aria-current="page"></a>');
            a.attr('href', link.url);
            a.text(link.name);
            let li = $('<li class="nav-item"></li>');
            li.append(a);
            $('.navbar-nav').append(li);
        });
        $('#social_links').empty();
        data.social_links.forEach(function (link) {
            $('#social_links').append(`<li class="list-group-item border-0 bg-transparent"><a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">${link.name}</a></li>`);
        })

        $('#profile-img').attr('src', data.img);
        $('.cname').text(data.name);
        $('.cskill').text(data.speciality);
        $('.cabout').text(data.about);
        $('#expertise').empty();
        data.expertise.forEach(function (de) {
            $('#expertise').append(`<div class="col d-flex align-items-start">
                    <div
                        class="mt-3 icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <i class="${de.icon}"></i>
                    </div>
                    <div class="mt-3">
                        <h3 class="fs-2 text-body-emphasis">${de.title}</h3>
                        <p>${de.description}</p>

                    </div>
                </div>`);
        });
        $('#skils').empty();
        data.skils.forEach(function (sk) {
            $('#skils').append(`<div class="col">
                    <div class="card shadow-sm border-0">
                        <div class="card-body">
                            <h5 class="ctitle fw-bold text-primary">${sk.title}</h5>
                            <p class="ctext">${sk.description}</p>
                        </div>
                    </div>
                </div>`);
        });
        $('title').html(data.name);

        //SEO
        let metaDescription = $('<meta name="description" content="">');
        let metaKeywords = $('<meta name="keywords" content="">');

        metaDescription.attr('content', dataJson.data.about);
        metaKeywords.attr('content', dataJson.data.speciality);

        $('head').append(metaDescription);
        $('head').append(metaKeywords);

        $('#app').fadeIn(500);
    }
});

