import template from "./components/Template.js";



const root = document.getElementById("container");
function assets(data) {  
  console.log(data);
  const templete = document.createElement("div");
  templete.innerHTML=template(data);
 root.appendChild(templete);
}

//fetching data from api

async function getdata() {
  const data = await fetch(
    "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
  );
  const json = await data.json();
  console.log(json);
  callAsset(json);
}

getdata();

//this function will call the asset function that creats dynamic assets

function callAsset(json) {
  const data = json?.tasks[0].assets;
  console.log(data);
  data.forEach((item) => {
    return assets(item);
  });
}
const profile= document.getElementById("profile");





