function monterLegende() {
    let texte13 = document.querySelector('.texte13');
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200,
        update: function () {
            texte13.style.display = "block";
        }
    }).play;
}



function descendreLegende() {
    return anime({
        targets: '.texte13',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

/*
function glisserCote() {
    return anime({
        targets: '.texte14',
        translateX: '500px',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function glisserDessous() {
    return anime({
        targets: '.texte14',
        translateX: '0px',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function carrousel() {

    var images15 = document.querySelectorAll('.image15');

    var dureeTransition = 2000;
    var deltaEntreTransition = 1000;
    var dureeAnimation = dureeTransition + images15.length * dureeTransition +
        ((images15.length - 1) * deltaEntreTransition);

    images15.forEach(function (img15, indiceImg15) {

        img15.style.zIndex = images15.length - indiceImg15;

    });

    var animation15 = anime.timeline({ loop: true, delay: 0 });
    animation15.add({
        targets: images15,
        translateX: [
            { value: '500', duration: dureeTransition },
            {
                value: '-500',
                duration: 0,
                delay: function (img15, indiceImg15) {
                    if (indiceImg15 < 3)
                        return (((3 - indiceImg15) * deltaEntreTransition) +
                            ((2 - indiceImg15) * dureeTransition)); return 0
                }
            },
            {
                value: '0',
                duration: function (img15, indiceImg15) {
                    if (indiceImg15 < 3) return dureeTransition; return 0;
                },
                easing: 'linear'
            }
        ],
        delay: function (img15, indiceImg15) {
            return deltaEntreTransition + (indiceImg15 * dureeTransition) + (indiceImg15 * deltaEntreTransition);
        },
        easing: 'linear'
    });

}

function bouger() {
    return anime({
        targets: '.polymorph9',
        points: [
            { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631  3.426 54.369' },
            { value: '70 41 118.574 59.369 111.145 132.631 60.855  84.631 20.426 60.369' },
            { value: '70  6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
            { value: '70 57 136.574 54.369  89.145 100.631 28.855 132.631 38.426 64.369' },
            { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631  3.426 54.369' }
        ],
        easing: 'easeInQuad',
        duration: 2000,
        loop: 3,
        autoplay: false
    }).play;
};

function ecrire() {
    return anime({
        targets: '.lines10 path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (line10, i) { return i * 250 },
        direction: 'alternate',
        loop: 6,
        autoplay: false
    }).play;
};

function charge() {

    let objet16 = document.querySelector('.objet16');

    let variables = {
        Fichiers: 0,
        Chargement: '0%'
    };

    function chargementTXT() {
        return anime({
            targets: variables,
            Fichiers: 201987,
            Chargement: '100%',
            easing: 'linear',
            round: 1,
            update: function () {
                objet16.innerHTML = variables.Fichiers + " fichiers chargés (" + variables.Chargement + " du chargement effectué)";
            },
            autoplay: false
        });
    };

    return chargementTXT().play;

}

function chargeBarre() {
    let texte17 = document.querySelector('.texte17');
    return anime({
        targets: '.full17',
        width: '100%',
        easing: 'easeOutQuad',
        update: function (anim) {
            texte17.innerHTML = 'Progression du chargement : ' + Math.round(anim.progress) + '%';
        },
        autoplay: false
    }).play;
};

*/ 