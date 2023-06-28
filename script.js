import { arrow } from "./Icons/icons.js"

const root = document.getElementById("container");
function assets(data) {
  console.log(data);
  const templete = document.createElement("div");

  //conditions to render data in each asset
  function getcontent(data) {
    switch (data?.asset_id) {
      case 18883: {
        return `<iframe 
        width="410" 
        height="315" 
        src="${data?.asset_content}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; clipboard-write; 
        encrypted-media; gyroscope; 
        picture-in-picture; web-share" 
        allowfullscreen></iframe>`;
      };
      case 18884:{
        return `
        <div class="thread">
        <img src=${arrow} />
        <h3> Thread A</h3>
        <div>
        `
      }
    }
  }
  templete.innerHTML = `
    <div class="container">
          <div class="container-head">
            <h1>${data?.asset_title}</h1>
            <div class="colapse-container">
              i
            </div>
          </div>
          <div class="description">
            <strong>Description:</strong> ${data?.asset_description}
          </div>
          <div>
          ${getcontent(data)}
          </div>
            
        </div>
    `;
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
