const icon_menu_box = document.getElementById('btn-ham');
const side_bar = document.querySelector('.side-bar');
const icon_bar = document.querySelectorAll('.icon');
const main_sc = document.querySelector('.main-sc');
const player_video_bar = document.querySelector('.icons-video');
const video_sc = document.getElementById('video-ic');
const volume_btn = document.getElementById('btn-vl');
let vl_slider_video = document.querySelector('.slider-vl');
const slider_vl = document.getElementById('slider-vl');
let video_first = document.getElementById('first-video');
let video_second = document.getElementById('second-video');
let video_third = document.getElementById('third-video');
let video_four = document.getElementById('four-video');
const btn_more = document.querySelector('.btn-more');
let first_src = ['immagini/video/Bg_video1.mp4', 'immagini/video/Bg_video2.mp4', 'immagini/video/Bg_video3.mp4', 'immagini/video/Bg_video4.mp4'];

video_first.onclick = ()=>{
    video.setAttribute('src', first_src[0]);
};

video_second.onclick = ()=>{
    video.setAttribute('src', first_src[1]);
};

video_third.onclick = ()=>{
    video.setAttribute('src', first_src[2]);
};

video_four.onclick = ()=>{
    video.setAttribute('src', first_src[3]);
};

btn_more.onclick = ()=>{
    btn_more.style.display = 'none';
    video_four.style.display = 'flex';
};

function Side_Menu_Style(){
    let condition_ham = icon_menu_box.classList.contains('active');
    if (!condition_ham) {
        side_bar.classList.toggle('active');
        icon_menu_box.classList.toggle('active');
        main_sc.classList.toggle('active');
        icon_bar.forEach((items)=>{
         items.classList.toggle('active');
        })
        player_video_bar.classList.toggle('active');
    } else {
        side_bar.classList.remove('active');
        icon_menu_box.classList.remove('active');
        main_sc.classList.remove('active');
        icon_bar.forEach((items)=>{
            items.classList.remove('active');
           })
        player_video_bar.classList.remove('active');
    }
}

icon_menu_box.addEventListener('click', Side_Menu_Style);

video_sc.addEventListener('mouseover', ()=>{
   if(!player_video_bar.classList.contains('hover')){
      player_video_bar.classList.toggle('hover');
   }
})


video_sc.addEventListener('mouseout', ()=>{
    if(player_video_bar.classList.contains('hover')){
       player_video_bar.classList.remove('hover');
    }
 })

 let video = document.querySelector('.video-prod');
 let slider_video = document.getElementById('slider-vd');
 let index_text_video = document.getElementById('text-index');
 
 function update_Timeline(){
    let time = video.currentTime;
    let duration = video.duration;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60) % 60;
    let seconds = Math.floor(time % 60);
    let hours_d = Math.floor(duration / 3600);
    let minutes_d = Math.floor(duration / 60) % 60;
    let seconds_d = Math.floor(duration % 60);

    if (hours === 0) {
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        index_text_video.textContent = minutes + ':' + seconds + '/' + minutes_d + ':' + seconds_d;
    }
    else{
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        index_text_video.textContent = hours + ':' + minutes + ':' + seconds + '/' + hours_d + ':' + minutes_d + ':' + seconds_d;
    }
 };

 window.addEventListener('load', ()=>{
    slider_video.max = video.duration;
    slider_video.value = video.currentTime;
    slider_vl.value = video.volume;
    update_Timeline();
 })

let play_icon = document.getElementById('play');
let pause_icon = document.getElementById('pause');

play_icon.addEventListener('click', ()=>{
    let condition = pause_icon.style.display !== 'block';
    if (condition) {
        play_icon.style.display = 'none';
        pause_icon.style.display = 'block';
        video.play();
        if (video.play()) {
            setInterval(()=>{
                slider_video.value = video.currentTime;
                update_Timeline();
            }, 300)
        }
    }
})

pause_icon.addEventListener('click', ()=>{
    let condition = play_icon.style.display !== 'block';
    if (condition) {
        play_icon.style.display = 'block';
        pause_icon.style.display = 'none';
        video.pause();
    }
})

slider_video.addEventListener('change', ()=>{
     video.currentTime = slider_video.value;
})

volume_btn.addEventListener('click', ()=>{
    if (!vl_slider_video.classList.contains('click')) {
        vl_slider_video.classList.add('click');
    } else {
        vl_slider_video.classList.remove('click');
    }
})

slider_vl.addEventListener('change', ()=>{
    video.volume = slider_vl.value;
})

let icon_full = document.getElementById('full-icon');
let video_rv = document.querySelector('.video-sc')

icon_full.addEventListener('click', ()=>{
    if (!video_rv.classList.contains('fullscreen')) {
    video_rv.classList.add('fullscreen');
    player_video_bar.classList.add('fullscreen');
    video_rv.requestFullscreen();
    }
    else{
    video_rv.classList.remove('fullscreen');
    player_video_bar.classList.remove('fullscreen');
    document.exitFullscreen();
    }
})