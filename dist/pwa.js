const installButton = document.querySelector('#install-arcade');
const installDialog = document.querySelector('#install-dialog');
let installPrompt;
const standalone = window.matchMedia('(display-mode: standalone), (display-mode: minimal-ui), (display-mode: fullscreen)');
function updateInstallButton() {
  installButton.hidden = standalone.matches || navigator.standalone === true;
}
updateInstallButton();
standalone.addEventListener('change', updateInstallButton);
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
});
window.addEventListener('appinstalled', () => {
  installPrompt = null;
  installButton.hidden = true;
  installDialog.close();
});
installButton.addEventListener('click', async () => {
  if (installPrompt) {
    const prompt = installPrompt;
    installPrompt = null;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch (_) { installDialog.showModal(); }
  } else {
    installDialog.showModal();
  }
});
const connectionStatus = document.querySelector('#connection-status');
function updateConnection() { connectionStatus.hidden = navigator.onLine; }
window.addEventListener('online', updateConnection);
window.addEventListener('offline', updateConnection);
updateConnection();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Browsing still works if offline caching is unavailable.
    });
  });
}
