import structurePointer from "./StructurePointer.js";
import { arrow } from "../Icons/icons.js";
import threadComponent from "./ThreadComponent.js";

//conditions to render data in each asset
function getContent(data) {
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
      return `<div>${structurePointer()}</div>`;
    }
    case 18886: {
      return `<div></div>`;
    }
  }
};
export default getContent;
