import getContent from "./Getcontent.js";

function template(data){
    return`
    <div class="container">
          <div class="container-head">
            <h1>${data?.asset_title}</h1>
            <div class="colapse-container" onclick="colapseContainer(event)">
              i
            </div>
          </div>
          <div class="description" id="togglecontainer">
            <strong>Description:</strong> ${data?.asset_description}
          </div>
          <div >
          ${getContent(data)}
          </div>
            
        </div>
    `;
}

export default template;