document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu__toggle");
    var closeArrow = document.getElementById("closeArrow");
    var audio = document.getElementById("backgroundMusic");
    var playBtn = document.getElementById("playPauseBtn");
    var playIcon = document.getElementById("playIcon");
    var pauseIcon = document.getElementById("pauseIcon");
    var volumeBtn = document.getElementById("volumeModeBtn");
    var highIcon = document.getElementById("highVolumeIcon");
    var muteIcon = document.getElementById("muteIcon");

    if (closeArrow && menuToggle) {
        closeArrow.addEventListener("click", function () {
            menuToggle.checked = false;
        });
    }

    function show(el) {
        if (el) {
            el.style.display = "inline";
        }
    }

    function hide(el) {
        if (el) {
            el.style.display = "none";
        }
    }

    function showPaused() {
        show(playIcon);
        hide(pauseIcon);
    }

    function showPlaying() {
        hide(playIcon);
        show(pauseIcon);
    }

    function showSound(muted) {
        if (muted) {
            hide(highIcon);
            show(muteIcon);
        } else {
            show(highIcon);
            hide(muteIcon);
        }
    }

    if (audio) {
        audio.volume = 1;
        showPaused();
        showSound(false);
    }

    if (playBtn && audio) {
        playBtn.addEventListener("click", function () {
            if (audio.paused) {
                var promise = audio.play();
                if (promise && promise.then) {
                    promise.then(showPlaying).catch(showPaused);
                } else {
                    showPlaying();
                }
            } else {
                audio.pause();
                showPaused();
            }
        });
    }

    if (volumeBtn && audio) {
        volumeBtn.addEventListener("click", function () {
            var muted = audio.volume === 0;
            audio.volume = muted ? 1 : 0;
            showSound(!muted);
        });
    }
});
