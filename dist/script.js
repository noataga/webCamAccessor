
let camera_button = document.querySelector("#main__start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#main__video-button");
let canvas = document.querySelector("#canvas");
let name = document.querySelector("#name__input");
let age = document.querySelector("#age__input");
let customer = document.querySelector("#customer__input");
let save_button = document.querySelector("#saver")
let image_data_url = null;
camera_button.addEventListener('click', async function() {
  let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  video.srcObject = stream;
});

click_button.addEventListener('click', function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   image_data_url = canvas.toDataURL('image/jpeg');
});


name.addEventListener('change', function (){
   name = document.querySelector("#name__input").value;
  console.log(name)
})
age.addEventListener('change', function (){
  age = document.querySelector("#age__input").value;
  console.log(age)
})
customer.addEventListener('change', function (){
  customer = document.querySelector("#customer__input").value;
})

save_button.addEventListener('click', function (){
  console.log(name)
  console.log(age)
  console.log(customer)
  console.log(image_data_url)
  let body = JSON.stringify({ data: {name: name,age: age,customer: customer} , image: image_data_url})
  console.log(body)
   fetch( 'http://localhost:3000/api/customer', {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     },
     body: body
   }).then((res)=>{
     console.log(res)

     }).catch((e)=>{
     console.log(e)
   })

})



