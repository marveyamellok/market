var link = document.querySelector(".btn--help"),
    popup = document.querySelector(".modal_write-us"),
    closewrite = document.querySelector(".close-write-us"),
    linkmap = document.querySelector(".map"),
    openmap = document.querySelector(".modal-map"),
    closemap = document.querySelector(".close-map"),
    linkaddbasked = document.querySelectorAll(".buy"),
    openaddbasked = document.querySelector(".modal-add"),
    closeaddbasked = document.querySelector(".close-modal-add"),
    continueshopping = document.querySelector(".btn--later");



    if (link&&popup&&closewrite) {
    	var form = popup.querySelector("form"),
            login = popup.querySelector("[name=login]"),
            usermail = popup.querySelector("[name=user-mail]"),
            storage = localStorage.getItem("login");

    link.addEventListener("click",function (event){
	   event.preventDefault();
	   popup.classList.add("modal_write-us-show");
	   login.focus();
	   if (storage) {
		  login.value = storage;
		  usermail.focus();
	    } else {
		  login.focus();
		}
		}),
        form.addEventListener("submit",function(event){
        if (!login.value || !usermail.value){
	       event.preventDefault();
	       popup.classList.add("modal-error");
        } else {
	       localStorage.setItem("login",login.value);
    }}),
    closewrite.addEventListener("click",function (event){
	    event.preventDefault();
	    popup.classList.remove("modal_write-us-show");
	    popup.classList.remove("modal-error");
    }),
    window.addEventListener("keydown",function (event) {
	    if (event.keyCode === 27){
		   if(popup.classList.contains("modal_write-us-show")){
		   popup.classList.remove("modal_write-us-show");
	}}});
 
   }

    
    for (var i = 0; i < linkaddbasked.length; i++)
    linkaddbasked[i].addEventListener("click", function(event){
	event.preventDefault();
	openaddbasked.classList.add("modal-add-show");
    }),
    closeaddbasked.addEventListener("click",function (event){
	event.preventDefault(),
	openaddbasked.classList.remove("modal-add-show")
    }),
    continueshopping.addEventListener("click",function (event){
	event.preventDefault();
   	openaddbasked.classList.remove("modal-add-show")
    }),
    window.addEventListener("keydown",function (event) {
	    if (event.keyCode === 27){
		   if(openaddbasked.classList.contains("modal-add-show")){
		   openaddbasked.classList.remove("modal-add-show");
	}}});

	linkmap.addEventListener("click",function (event){
	event.preventDefault();
	openmap.classList.add("modal-map-show");
    }),
    closemap.addEventListener("click",function (event){
	event.preventDefault();
	openmap.classList.remove("modal-map-show");
    }); 