(function () {
    document.querySelectorAll('link[rel="stylesheet"]')
        .forEach(elem => {
            if (elem.dataset.unstyler != undefined && elem.dataset.unstyler != '') {
                elem.href = elem.dataset.unstyler;
                elem.dataset.unstyler = '';
            } else {
                elem.dataset.unstyler = elem.href;
                elem.href = '';
            }
        });

    document.querySelectorAll('style')
        .forEach(elem => {
            if (elem.dataset.unstyler != undefined && elem.dataset.unstyler != '') {
                elem.innerText = elem.dataset.unstyler;
                elem.dataset.unstyler = '';
            } else {
                elem.dataset.unstyler = elem.innerText;
                elem.innerText = '';
            }
        });

    document.querySelectorAll('*[style]')
        .forEach(elem => {
            if (elem.dataset.unstyler != undefined && elem.dataset.unstyler != '') {
                elem.style.cssText = elem.dataset.unstyler;
                elem.dataset.unstyler = '';
            } else {
                elem.dataset.unstyler = elem.style.cssText;
                elem.style.cssText = '';
            }
        });
})();