const ul = document.querySelector("ul"),
    input = ul.querySelector("input");
let tags = [];
function createTag() {
    //supprimer tout les li avant d 'ajouter les tag
    ul.querySelectorAll("li").forEach(li => li.remove());
    console.log(tags.slice().reverse());
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`
        ul.insertAdjacentHTML("afterbegin", liTag);//insertion 
    });
}

function remove(element, tag){
    let index = tags.indexOf(tag);
    tags=[...tags.slice(0,index), ...tags.slice(index + 1)];
    console.log(element, tag);
}

function addTag(e) {
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, ' '); 
        console.log(tag)//supprimer ces caractères
        if (tag.length > 1 && !addTags.includes(tag)) {//si la longeur de tag >1 et 
            tag.split(',').forEach(tag => {
                tags.push(tag);
                console.log(tags);
                createTag();
            });
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);
const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", ()=>{
    tags.length = 0;//le tableau sera vide
    ul.querySelectorAll("li").forEach(li=> li.remove());///supprimer
});
