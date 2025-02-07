let getId = (id)=>document.getElementById(id)

let list_item = document.querySelectorAll('aside ul li');
list_item.forEach(li => {
    li.addEventListener('click',()=>{
        getId('logo').style.display = 'none';
        let liId = li.id;
        const sectionId = liId.replace('li_','')
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        const sectionToShow = document.getElementById(sectionId);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
            }
    });
});