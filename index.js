

const linksDiv = document.getElementsByClassName("links")[0];
linksDiv.classList.add("index");

let links= [];

let addNewLink = (link, namea)=>{
    links.push({link, namea});
    const btn = document.createElement("button");
    btn.innerHTML=namea;

    const linkDiv = document.createElement('div');
    linkDiv.classList.add("link");

    btn.onclick = (ev) =>{
        open(link, "_blank");
    }

    linkDiv.appendChild(btn);
    linksDiv.appendChild(linkDiv);
}

addNewLink("https://www.google.com/", "Google");
addNewLink("https://www.youtube.com/", "YouTube");
addNewLink("https://www.reddit.com/", "Reddit");
addNewLink("https://fitgirl-repacks.site/", "Piracy");
addNewLink("https://www.pornhub.com/", "BSs");
addNewLink("https://www.linkedin.com/feed/", "CORPO");


