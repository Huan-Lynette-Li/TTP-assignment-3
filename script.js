
      // 1) Select the section with an id of container without using querySelector.
      
      console.log(document.getElementById("container"));

      // 2) Select the section with an id of container using querySelector.
      
      console.log(document.querySelector("#container"));

      // 3) Select all of the list items with a class of "second".
      
      console.log(document.getElementsByClassName("second"));

      // 4) Select a list item with a class of third, but only the list item inside of the ol tag.
      
      console.log(document.querySelector("ol .third"));

      // 5) Give the section with an id of container the text "Hello!".

      let  p= document.createElement("p");   
           p.innerHTML = "Hello!";                   
             document.body.appendChild(p);               

      // 6) Add the class main to the div with a class of footer.
      document.getElementsByClassName("footer")[0].classList.add("main");
     

      // 7) Remove the class main on the div with a class of footer.
      document.querySelector(".footer").classList.remove("main");
     

      // 8) Create a new li element.
      var newli = document.createElement("li");

      // 9) Give the li the text "four".
         newli.innerText = "four";

      // 10) Append the li to the ul element.
      let ul = document.querySelector("ul");
      ul.appendChild(newli);

      // 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
      const newol = document.querySelectorAll("ol li");
      for (let i=0; i < newol.length; i++) {
        newol[i].style.backgroundColor = "green";
      }

      // 13) Remove the div with a class of footer.
      document.querySelector(".footer").remove();
      

