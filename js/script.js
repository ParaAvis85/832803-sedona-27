var button = document.querySelector(".popup-btn");
var form = document.querySelector(".modal-form");

var adult = form.querySelector("[name=adult]");
var child = form.querySelector("[name=child]");
var arrival = form.querySelector("[name=arrival]");
var departure = form.querySelector("[name=departure]");

var isStorageSupport = true;
var storageAdult = "";
var storageChild = "";

try {
 storageAdult = localStorage.getitem("adult");
 storageChild = localStorage.getItem("child");
} 
catch (err) {
 isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
 evt.preventDefault();
 form.classList.toggle("popup-show");
 form.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
 if (!arrival.value || !departure.value || !adult.value || !child.value) {
     evt.preventDefault();
     form.classList.remove("popup-error");
     form.offsetWidth = form.offsetWidth;
      form.classList.add("popup-error");
     if (!departure.value) {
         departure.focus();
         if (!arrival.value);
             arrival.focus();
         }   
     } else if (!adult.value) {
         adult.focus();
     } else child.focus();
 });

window.addEventListener("keydown", function(evt) {
     if (evt.keyCode === 27) {
        evt.preventDefault();
         if (form.classList.contains ("popup-show")) {
             form.classlist.add ("popup-show");
             form.classList.remove ("popup-error");
            }
        }
    });



