(function() {
    const video = document.querySelector('#video_tag') || document.querySelector('video');
    if (!video) {
        alert("Video not found. Play it for a few seconds first.");
        return;
    }

    // Fake full watch by jumping to end + dispatching all events
    video.currentTime = video.duration - 0.1;
    video.muted = true;

    // Trigger all events the platform checks
    video.dispatchEvent(new Event('timeupdate'));
    video.dispatchEvent(new Event('progress'));
    video.dispatchEvent(new Event('canplay'));
    video.dispatchEvent(new Event('canplaythrough'));
    video.dispatchEvent(new Event('ended'));

    // Force the player to think it's done
    setTimeout(() => {
        video.dispatchEvent(new Event('ended'));
        alert("Video marked as COMPLETED in 1 second! Check your progress-PIYUSH MISHRA");
    }, 500);
})();
(function() {
    const video = document.querySelector('#video_tag') || document.querySelector('video');
    if (!video) {
        alert("Video not found. Play it first- PIYUSH MISHRA");
        return;
    }

    // Step 1: Mute (116x speed is unbearable)
    video.muted = true;

    // Step 2: Block the platform's rate limiter
    const originalSet = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set;
    Object.defineProperty(video, 'playbackRate', {
        set: function(val) {
            // Ignore the platform's cap and force real playback rate
            originalSet.call(this, val > 16 ? 16 : val); // browser limit is ~16x, but we use trick below
            this._forcedRate = val; // store our real rate
            console.log(`Forced playback rate: ${val}x`);
        },
        get: function() {
            return this._forcedRate || 2;
        },
        configurable: true
    });

    // Step 3: Use the real browser playback hack (works beyond 16x)
    video.playbackRate = 116; // this is now forced

    // Step 4: Trick the browser into using our rate by resetting media
    const src = video.currentSrc;
    video.src = ''; // temporarily remove source
    setTimeout(() => {
        video.src = src;
        video.currentTime = video.currentTime; // keep position
        video.load();
        video.play();
    }, 50);

    // Step 5: Prevent reset from DiffLock
    setInterval(() => {
        if (video.playbackRate !== 1000) {
            video.playbackRate = 1000;
        }
    }, 500);

    alert("116x SPEED FORCED!\n\nCreated By Piyush Mishra Official Owner Contact Us");
})();