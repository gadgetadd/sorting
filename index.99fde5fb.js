const e=e=>e.sort((e,a)=>a.grade-e.grade||e.age-a.age||e.name.localeCompare(a.name)),a=document.querySelector(".students-form"),t=document.querySelector(".students-list");a.elements.students.value=JSON.stringify([{name:"John",age:21,grade:90},{name:"Jane",age:20,grade:85},{name:"Alice",age:22,grade:90},{name:"Bob",age:20,grade:80},{name:"David",age:21,grade:85}]),a.addEventListener("submit",a=>{let r;a.preventDefault();try{r=JSON.parse(a.target.elements.students.value);let e=r.every(e=>"name"in e&&"age"in e&&"grade"in e);if(!e)throw Error()}catch(e){return alert("Введіть валідний масив студентів!")}let n=e(r).map(({name:e,age:a,grade:t})=>`<li><p class="item"> Name: ${e}, Age: ${a}, Grade: ${t}</p></li>`).join("");t.innerHTML=n});
//# sourceMappingURL=index.99fde5fb.js.map