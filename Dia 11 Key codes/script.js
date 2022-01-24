//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    console.log(event);
    
    insert.innerHTML = (`
    <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
         <div class="key">
            ${event.keyCode}
            <small>event</small>
        </div> 
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `);
});