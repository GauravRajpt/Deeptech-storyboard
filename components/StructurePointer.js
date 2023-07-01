

function structurePointer(){
    

return `
<div class="structurepointer">
<div class="innercontainer">
<h3>Title</h3>
<div>
<input class="titlebox" type="text" name="title"/>
</div>
<h3>Content</h3>
<div class="textboxcontainer">
<div class="tools">
<ul>
<li>File</li>
<li>Edit</li>
<li>View</li>
<li>Insert</li>
<li>Format</li>
<li>Tools</li>
</ul>
<ul>
<svg width="24" height="24" focusable="false"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8Z" fill-rule="nonzero"></path></svg>
<svg width="24" height="24" focusable="false"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3Z" fill-rule="nonzero"></path></svg>
<svg width="24" height="24" focusable="false"><path d="m15.3 10-1.2-1.3 2.9-3h-2.3a.9.9 0 1 1 0-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 1 1-1.8 0V7l-2.9 3Zm0 4 3 3v-2.3a.9.9 0 1 1 1.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 1 1 0-1.8H17l-3-2.9 1.3-1.2ZM10 15.4l-2.9 3h2.3a.9.9 0 1 1 0 1.7H5a.9.9 0 0 1-.9-.9v-4.4a.9.9 0 1 1 1.8 0V17l2.9-3 1.2 1.3ZM8.7 10 5.7 7v2.3a.9.9 0 0 1-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 0 1 0 1.8H7l3 2.9-1.3 1.2Z" fill-rule="nonzero"></path></svg>
<svg width="24" height="24" focusable="false"><path d="m5 15.7 3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7ZM5 18V19h3l2.8-2.9-2-2L5 17.9Zm14-3-2.5-2.4-6.4 6.5H19v-4ZM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill-rule="nonzero"></path></svg>
</ul>
</div>
<div class="textbox" >
<textarea id="textbox" onchange="wordCount()" ></textarea>
<div class="textinfo">
<li>p</li>

<li> Words:<span id="wordlength">0 </span></li>


</div>
</div>

</div>
<div class="category">
<div class="innercontainer">
<h3>Category</h3>
<select id="category" onchange="getsubcategory(event)">
<option>-- Select --</option>
<option value="Learnability">Learnability</option>
<option  value="Technology">Technology</option>
<option  value="Miscellaneous">Miscellaneous</option>
</select>
</div>
<div class="innercontainer">
<h3>Sub Category</h3>
<select id="selectsub">

</select>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;


}

export default structurePointer;