// Saves options to chrome.storage
const saveOptions = () => {
    const copy = document.getElementById('copy').checked;
    const paste = document.getElementById('paste').checked;
    const cut = document.getElementById('cut').checked;
    const selectall = document.getElementById('selectall').checked;

    chrome.storage.sync.set(
      { copy: copy, paste: paste, cut: cut, selectall: selectall},
      () => {
        // to use for debug :)
        const status = document.getElementById('status'); 
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
    alert("Options saved !")
  };
  
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { copy: true, paste: true, cut: true, selectall: true},
      (items) => {
        document.getElementById('copy').checked = items.copy;
        document.getElementById('paste').checked = items.paste;
        document.getElementById('cut').checked = items.cut;
        document.getElementById('selectall').checked = items.selectall;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);