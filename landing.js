const body = document.querySelector("body")
       sidebar = body.querySelector(".sidebar")
       toggle = body.querySelector(".toggle")
       searchBtn = body.querySelector(".search-box")
       modeSwtich = body.querySelector(".toggle-switch")
       modeText = body.querySelector(".mode-Text")

       toggle.addEventListener("click", () =>{
         sidebar.classList.toggle("close");
       });


       modeSwtich.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });
