(() => {
  const initializeMotion = () => {
    const card = document.querySelector('.hero-video');
    const toggle = card?.querySelector('.video-motion-toggle');
    if (!card || !toggle || card.classList.contains('motion-ready')) return;

    card.classList.add('motion-ready');
    toggle.hidden = false;
    toggle.setAttribute('aria-label', 'Pause play button animation');
    toggle.addEventListener('click', () => {
      const paused = card.classList.toggle('motion-paused');
      toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
      toggle.setAttribute('aria-label', paused ? 'Resume play button animation' : 'Pause play button animation');
    });
  };

  const initializeVideo = () => {
    const dialog = document.querySelector('#hero-video-dialog');
    const player = dialog?.querySelector('[data-video-player]');
    const closeButton = dialog?.querySelector('.video-dialog-close');
    const links = document.querySelectorAll('.hero-video-link');

    if (!dialog || !player || !closeButton || !links.length ||
        typeof dialog.showModal !== 'function' || dialog.dataset.videoInitialized) return;

    dialog.dataset.videoInitialized = 'true';
    let opener = null;

    links.forEach(link => {
      link.addEventListener('click', event => {
        // Keep the anchor's usual behavior for new tabs and modified clicks.
        if (event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const videoId = link.dataset.videoId;
        if (!/^[A-Za-z0-9_-]{11}$/.test(videoId || '')) return;

        if (dialog.open) {
          event.preventDefault();
          return;
        }

        try {
          dialog.showModal();
        } catch {
          // The link still opens YouTube if this browser cannot open the dialog.
          return;
        }

        event.preventDefault();
        opener = link;

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.title = link.dataset.videoTitle || 'MakSIL introduction video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        player.replaceChildren(iframe);
      });
    });

    closeButton.addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) {
        dialog.close();
      }
    });

    // Native Escape handling also fires close, so every exit stops playback.
    dialog.addEventListener('close', () => {
      player.replaceChildren();
      if (opener?.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    });
  };

  const initialize = () => {
    initializeMotion();
    initializeVideo();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
