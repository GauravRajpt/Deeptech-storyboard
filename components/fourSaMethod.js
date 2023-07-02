import { arrow } from "../Icons/icons.js";

function fourSaMethod(){
    return `<div class="foursacontainer">

    <div class="innercontainer4sa">
    <div>
    <div class="foursahead">
    <img src=${arrow} alt=arrow onclick="transform(event)"/>
    <h3>Introduction</h3>
    </div>
    
    <div  class="desc">
    The 4SA Method, How to bring a idea into process?</div>
    </div>
    <div>
    <div class="foursahead">
    <img src=${arrow} id="arrow" onclick="transform(event)" alt=arrow/>
    <h3>Thread A</h3>
    </div>
    <div  class="desc">
    How are you going to develop your strategy? Which method are you going to use to develop a strategy?What if the project is lengthy?</div>
    </div>
    <div>
    <div class="foursahead">
    <img src=${arrow} onclick="transform(event)" alt=arrow/>
    <h3>Transition 1 </h3>
    </div>
    <div class="desc">
    For preparing the strategy from the concept and build it into product one of the methods used is the 4SA approach.
 </div>
 </div>
</div>
    </div>
    </div>`
}
export default fourSaMethod;