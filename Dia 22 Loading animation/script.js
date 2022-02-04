const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Notebook with codes on the screen"/>';
    title.innerHTML = 'Beautiful puppy';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt iure dignissimos cumque provident officiis.';
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Bryanauta Photo" class="profile-img"/>';
    name.innerHTML = 'Max Power';
    date.innerHTML = 'Feb 4, 2022';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
};