function renderFlower(el){
    return ` 
    
    <li>
                <div class="left">
                    <a href="#" title=""><img src=${el.img} alt="ThuyTien_01.jpg" /></a>
                </div>
                <div class="right">
                    <h2><a href="#" title="">${el.name}</a></h2>
                    <p>${el.description}</p>
                    <span><a href="#" title="">-Chi tiết-</a></span>
                </div>
                <div class="clr"></div>
            </li>`
}

async function display(){
    let listFlowers = await axios('http://localhost:3000/flowers')

    listFlowers = listFlowers.data ; 

    let str = ''
    for (const el of listFlowers) {
        str += renderFlower(el)
    }
   
    let ulEl = document.querySelector('ul')
    ulEl.innerHTML = str
}
display()