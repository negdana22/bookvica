function audioplayer() {
    console.log("тут проблема")
    const audio = document.getElementById("backgroundMusic");
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeModeBtn = document.getElementById("volumeModeBtn");
    const muteIcon = document.getElementById("muteIcon");
    const lowVolumeIcon = document.getElementById("lowVolumeIcon");
    const mediumVolumeIcon = document.getElementById("mediumVolumeIcon");
    const highVolumeIcon = document.getElementById("highVolumeIcon");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");
    const playPauseBtn = document.getElementById("playPauseBtn");

    const menuToggle = document.getElementById('menu__toggle');
    const closeArrow = document.getElementById('closeArrow');

    
    lowVolumeIcon.style.display = "none";
    mediumVolumeIcon.style.display = "none";
    if (audio.volume === 0) {
        highVolumeIcon.style.display = "none";
        muteIcon.style.display = "inline";
    } else {
        highVolumeIcon.style.display = "inline";
        muteIcon.style.display = "none";
    }
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
    audio.pause();


    volumeModeBtn.addEventListener("click", function () {
        console.log("Volume Mode Button Clicked");
        audio.volume = audio.volume === 0 ? 1 : 0;
        updateVolumeBar();
        updateVolumeIcons();
    });

    const volumeBar = document.getElementById("volume-bar");
    const volumeFill = document.getElementById("volume-fill");
    const volumeControl = document.getElementById("volume-control");

    volumeControl.style.left = "100%";

    volumeControl.addEventListener("mousedown", function (event) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", handleMouseMove);
        });
    });

    function handleMouseMove(event) {
        const barRect = volumeBar.getBoundingClientRect();
        const fillWidth = Math.min(Math.max(0, event.clientX - barRect.left), barRect.width);
        const percentage = fillWidth / barRect.width;
        volumeFill.style.width = percentage * 100 + "%";
        volumeControl.style.left = percentage * 100 + "%";
        audio.volume = percentage;

        updateVolumeIcons(percentage);
        updateVolumeBar(); // Добавлен вызов функции updateVolumeBar после изменения уровня громкости
    }

    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline";
        } else {
            audio.pause();
            playIcon.style.display = "inline";
            pauseIcon.style.display = "none";
        }
    });

    function updateVolumeIcons() {
        const muted = audio.volume === 0;
        muteIcon.style.display = muted ? "inline" : "none";
        highVolumeIcon.style.display = muted ? "none" : "inline";
        lowVolumeIcon.style.display = "none";
        mediumVolumeIcon.style.display = "none";
    }

    function updateVolumeBar() {
        const percentage = audio.volume * 100;
        volumeFill.style.width = percentage + "%";
        volumeControl.style.left = percentage + "%";
    }

    
}
