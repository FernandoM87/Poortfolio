window.addEventListener("scroll", function (){
    var header = document.querySelector("nav");
    header.classList.toggle("down", window.scrollY>0);
}) 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// <span> as (x) that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// function to close the modal when user click outside it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const getInfo = async () => {

  const request = new Request('/resume.json');

  const response = await fetch(request);

  const cvObj = await response.json();

  return cvObj;
  
}

const populateCv = (cvObj) => {
let employmentHtml = ``;

cvObj.employment.forEach(element => {
  const listItem = `
  <li">
  <h5>${element.time}</h5>
  <p>
  <span >${element.jobTitle}</span><br>
  <span>${element.location}</span><br>
  ${element.text}
  </p>
  </li>`;

  employmentHtml +=listItem
});
document.getElementById('employmentList').innerHTML = employmentHtml;

let educationHtml = ``;
cvObj.education.forEach(element => {
  const listItem = `<li>${element}</li>`;

  educationHtml +=listItem
  //console.log(cvObj.education);
});

document.getElementById('educationList').innerHTML = educationHtml;

let internshipsHtml = ``;
cvObj.internships.forEach(element => {
  let listItem = `<li>
  <p>
  <span >${element.companyName}</span>
  <span>${element.text}</span><br>
  </p>
  </li>`;

  internshipsHtml +=listItem
  console.log(cvObj.internships);
});
document.getElementById('internshipsList').innerHTML = internshipsHtml;
}

const cvObj = await getInfo();
populateCv(cvObj);