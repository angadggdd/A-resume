// alert("Add");
function addNewWEField() {
   // console.log("Adding to field");
   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('weField');
   newNode.classList.add('mt-2');
   newNode.setAttribute("rows", 3);
   newNode.setAttribute('placeholder','Enter here');

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);

};

function addNewAQField() {

    let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('aqField');
   newNode.classList.add('mt-2');
   newNode.setAttribute("rows", 3);
   newNode.setAttribute('placeholder','Enter here');

   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");
   
   aqOb.insertBefore(newNode, aqAddButtonOb);

}

//generating cv

function generateCV() {
   // console.log("gernerating CV");
   let nameField = document.getElementById("nameField").value;

   let nameT1 = document.getElementById("nameT1");
   
   nameT1.innerHTML = nameField;
   document.getElementById("nameT2").innerHTML = nameField;
   document.getElementById("contectT").innerHTML = document.getElementById("contectField").value;
   document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
   document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;


   document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
   document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

   document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
   // document.getElementById("weT").innerHTML = document.getElementById("weField").value;
   // document.getElementById("aqT").innerHTML = document.getElementById("aqField").value;

   let wes= document.getElementsByClassName('weField')

   let str=""

   for(let e of wes){
      str=str+ `<li> ${e.value} </li>`;
   }

   document.getElementById("weT").innerHTML = str;


   let aqs= document.getElementsByClassName("eqField");

   let str1=""; 

   for(let e of aqs){
      str1 +=`<li> ${e.value} </li>`;
   }

   document.getElementById("aqT").innerHTML = str1;

   // code for img setting

   let file = document.getElementById("imgField").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file); // Corrected this line, changed 'readAsDataSRC' to 'readAsDataURL'

reader.onload = function () { // Corrected this line, changed 'onloadend' to 'onload'
   console.log(reader.result);

   // set the image to template
   document.getElementById('imgTemplate').src = reader.result;
};


   // document.getElementById('imgT').src = reader.result;

   document.getElementById("cv-form").style.display='none'
   document.getElementById("cv-template").style.display='block'


}

//  print cv

function printCV() {
   window.print();
}