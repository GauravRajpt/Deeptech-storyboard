import { arrow } from "./Icons/icons.js";
import { bulb } from "./Icons/icons.js";
import { msgIcon } from "./Icons/icons.js";
import { question } from "./Icons/icons.js";
import { rooticon } from "./Icons/icons.js";

const root = document.getElementById("container");
function assets(data) {
  console.log(data);
  const templete = document.createElement("div");

  //conditions to render data in each asset
  function getcontent(data) {
    switch (data?.asset_id) {
      case 18883: {
        return `<iframe 
        width="480" 
        height="315" 
        src="${data?.asset_content}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; clipboard-write; 
        encrypted-media; gyroscope; 
        picture-in-picture; web-share" 
        allowfullscreen></iframe>`;
      }
      case 18884: {
        return `
        <div class="thread">
        <img src=${arrow} />
        <h3> Thread A</h3>
        </div>
        ${threadComponent()}
        
        `;
      }
      case 18885: {
        return `<div></div>`;
      }
      case 18886: {
        return `<div></div>`;
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

function threadComponent(){
  return `
  <div class="containerSubthread">
    <div class="subThread1">
    <div class="inner">
    <h3>
    Sub thread 1
    </h3>
    <textarea class="text"></textarea>
    
    </div>
    <div class="icons">
    <img src=${bulb} alt="bulb"/>
    <img src=${msgIcon} alt="msgicon"/>
    <img src=${question} alt="question"/>
    <img src=${rooticon} alt="rooticon"/>
    </div>
    </div>
    <div class="SubInterpretation1">
   <div class="inner">
   <h3>
   Sub Interpretation 1
   </h3>
   <textarea class="text"></textarea>
   </div>
    <div class="selectbox">
    <select name="category">
    <option value="">select category</option>
    <option value="Remark">Remark</option>
    <option value="Sub-argument">Sub-argument</option>
    <option value="Sub-explanation">Sub-explanation</option>
    <option value="Core-principle">Core-principle</option>
    </select>
    <select name="process">
    <option value="">Select Process</option>
    <option value="Question">Question</option>
    <option value="Analogy">Analogy</option>
    <option value="Sarcasm">Sarcasm</option>
    </select>
    </div>
    </div>
  </div>
  `
}