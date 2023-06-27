const root = document.getElementById("container");
function assets(data) {
  const templete = document.createElement("div");
  templete.innerHTML = `
    <div class="container">
          <div class="container-head">
            <h1>Structure your Pointers</h1>
            <div class="colapse-container">
              i
            </div>
          </div>
          <div class="description">
            <strong>Description:</strong> ${data?.desription}
          </div>
          
        </div>
    `;
  root.appendChild(templete);
}

const data= [
    {
        desription: "stroy of alignment"
    },
    {
        desription:"stroy fininshed"
    },{
        desription: "stroy of alignment"
    },
    {
        desription:"stroy fininshed"
    }
]

data.forEach((d)=>{
    assets(d);
})