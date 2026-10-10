(() => {
  const initialize = () => {
    document.querySelectorAll('[data-resource-video-play]').forEach(button => {
      const player = button.closest('.resource-video-player');
      const iframe = player?.querySelector('iframe');
      if (!iframe || player.dataset.videoInitialized) return;

      const videoURL = new URL(iframe.src);
      videoURL.searchParams.set('autoplay', '1');
      videoURL.searchParams.set('rel', '0');

      player.dataset.videoInitialized = 'true';
      player.classList.add('motion-ready');
      iframe.setAttribute('aria-hidden', 'true');
      iframe.setAttribute('tabindex', '-1');
      button.hidden = false;

      button.addEventListener('click', () => {
        iframe.src = videoURL.href;
        iframe.removeAttribute('aria-hidden');
        iframe.removeAttribute('tabindex');
        button.hidden = true;
        player.classList.remove('motion-ready');
        iframe.focus();
      }, { once: true });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
