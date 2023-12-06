let img = document.querySelector('#display')
let gallery = document.querySelector(".carousel")
let guide = document.querySelector('#guide')
let gallery_caption = document.querySelector('#gallery_caption')

var pictures = [src = './images/image 1.jpg', src = './images/image 2.jpg',
src = './images/image 3.jpg', src = './images/image 4.jpg',
src = './images/image 5.jpg', src = './images/image 6.jpg'];

var show = img.src;


let pix = 0;
function foward() {
   gallery.style.display = 'none'
   gallery_caption.innerText ='Click here to restore gallery'
   if (pix < 6) {
      guide.style.display = 'none'
      img.style.display = 'flex'
      show = pictures[pix]
      img.src = show
      console.log(pictures[pix])
      pix += 1

   }
   else {
      pix = 0
      console.log(pictures[pix])
   }
}




function backward() {
   gallery.style.display = 'none'
   if (pix >= 0) {
      guide.style.display = 'none'
      img.style.display = 'flex'
      if (pix == undefined|pix==-1 ){ pix = 5}
      show = pictures[pix]
      img.src = show
      console.log(pictures[pix]);
      pix -= 1
   }
   else {
      show = pictures[pix];
      pix = 5

    }
}

function paste_picture(state){
   guide.style.display = 'none'
   img.style.display = 'flex'
   pix = state
   show = pictures[pix]
   img.src = show
   console.log(pictures[pix])
}

function restore_gallery(){
   gallery_caption.innerText = 'Click on each picture and see them come on stage'
   gallery.style.display='flex'
}



