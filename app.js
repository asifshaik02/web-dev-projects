//load html with contents in "details.json"
fetch("/data/details.json")
    .then(response => response.json())
    .then(data =>{
        l = [];
        for (let i in data){
            title = data[i].title;
            desc = data[i].description;
            path = data[i].path;
            l.push(`<div class=\"box\"><h2> ${title}</h2 ><p>${desc}</p><a href=\"${path}\" target=\"_blank\">Click Me!!</a></div >`);
        }
        document.getElementById('container').innerHTML = l; 
    })

//change theme of the web page
function changeTheme() {
    l = ["#003049", "#d62828", "#f77f00", "#fcbf49", "#2a9d8f", "#a8dadc", "#219ebc","#0081a7"];
    index = Math.floor(Math.random() * l.length);
    console.log(index);
    document.documentElement.style.cssText = `--main-bg-color: ${l[index]}`;
}
