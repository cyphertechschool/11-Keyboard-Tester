const insert = document.querySelector('.insert');


window.addEventListener('keydown', (e) => {
  console.log(e);
  insert.innerHTML = `
    <div class="key-code">
    ${e.key === " " ? "Space" : e.key}
    </div>
   <div class="key-control">
   <div class="key">
   ${e.key === " " ? "Space" : e.key}
   <small>Key</small>
   </div>
   <div class="key">
   ${e.keyCode}
     <small>Key Code</small>
   </div>
   <div class="key">
     ${e.code}
     <small>Code</small>
   </div>
   </div>
    
    `;
});
