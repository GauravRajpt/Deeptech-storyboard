import getContent from "./GetContent.js";

function template(data){
    return`
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
          ${getContent(data)}
          </div>
            
        </div>
    `;
}

export default template;