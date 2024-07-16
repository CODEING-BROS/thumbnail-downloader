// const link = document.querySelector(".field input[name='image_url']");
// let previewArea = document.querySelector(".preview-area")
// let imgTag = previewArea.querySelector(".thumbnail")
// let hiddenInput = document.querySelector(".hidden-inp")

// link.onkeyup = ()=>{
//     let imgLink = link.value
//     previewArea.classList.add("active")


//     if(imgLink.indexOf("https://www.youtube.com/watch?v=") != -1)
//     {
//         let vidId = imgLink.split("v=")[1].substring(0,11);
//         const ytThumbLink = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
//         imgTag.src = ytThumbLink;
//     }

//     else if(imgLink.indexOf("https://youtu.be/") != -1)
//     {
//         const vidId = imgLink.split("youtu.be/")[1].split("?")[0].substring(0, 11); // Extract video ID
//         const ytThumbLink = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
//         imgTag.src = ytThumbLink;
//     }

//     else if (imgLink.match(/\.(jpeg|jpg|png|gif|bmp|webp)$/i)) 
//     {
//         imgTag.src = imgLink;
//     }

//     else{
//         previewArea.classList.remove("active")
//         imgTag.src=''
//     }

//     hiddenInput.value = imgTag.src ? imgTag.src : '';
// }


const link = document.querySelector(".field input[name='imgurl']");
let previewArea = document.querySelector(".preview-area");
let imgTag = previewArea.querySelector(".thumbnail");
let hiddenInput = document.querySelector(".hidden-inp[name='thumbnail_url']");

link.onkeyup = () => {
    let imgLink = link.value;
    previewArea.classList.add("active");

    if (imgLink.indexOf("https://www.youtube.com/watch?v=") != -1) {
        let vidId = imgLink.split("v=")[1].substring(0, 11);
        const ytThumbLink = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src = ytThumbLink;
    } else if (imgLink.indexOf("https://youtu.be/") != -1) {
        const vidId = imgLink.split("youtu.be/")[1].split("?")[0].substring(0, 11); // Extract video ID
        const ytThumbLink = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src = ytThumbLink;
    } else if (imgLink.match(/\.(jpeg|png|gif|bmp|webp)$/i)) {
        imgTag.src = imgLink;
    } else {
        previewArea.classList.remove("active");
        imgTag.src = '';
    }

    hiddenInput.value = imgTag.src ? imgTag.src : '';
}
