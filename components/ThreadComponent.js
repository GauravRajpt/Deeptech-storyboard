import { bulb } from "../Icons/icons.js";
import { msgIcon } from "../Icons/icons.js";
import { question } from "../Icons/icons.js";
import { rooticon } from "../Icons/icons.js";

function threadComponent() {
  return `
    <div class="m-20">
    <div class="containerSubthread">
      <div class="subThread1">
      <div class="inner w-199">
      <h3>
      Sub thread 1
      </h3>
      <textarea class="text w-199" placeholder="Enter Text here"></textarea>
      
      </div>
      <div class="icons">
      <img src=${bulb} alt="bulb"/>
      <img src=${msgIcon} alt="msgicon"/>
      <img src=${question} alt="question"/>
      <img src=${rooticon} alt="rooticon"/>
      </div>
      </div>
      <div class="SubInterpretation1">
     <div class="inner w-199">
     <h3>
     Sub Interpretation 1
     </h3>
     <textarea class="text w-199" placeholder="Enter Text here"></textarea>
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
      <div>
      <button class="submit-button">Submit task</button>
      </div>
      <div class="inner mt-20">
      <h3>
      Summary for Thread A
      </h3>
      <textarea class="text" placeholder="Enter Text here"></textarea>
      
      </div>
  
    </div>
    
    `;
}
export default threadComponent;
