console.log("Take Control is loaded !");

function dontModify(e) {
    e.stopImmediatePropagation();
}

function allowSelectAll() {
    document.addEventListener("keydown", function (e) {
        const focusedElement = document.activeElement;
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            focusedElement.setSelectionRange(0, focusedElement.value.length);
        }
    });
}


chrome.storage.sync.get(
    {copy: true, paste: true, cut: true, selectall: true},
    (items) => {
      if (items.copy) {
        document.addEventListener("copy", dontModify, true);
      }
  
      if (items.paste) {
        document.addEventListener("paste", dontModify, true);
      }
  
      if (items.cut) {
        document.addEventListener("cut", dontModify, true);
      }
      if (items.selectall) {
        allowSelectAll();
      }
    }
)

