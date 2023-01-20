button = document.querySelector("button");
header = document.querySelector("h1");

function setUsername(){
    const name = prompt("Enter User name: ");
    localStorage.setItem("username", name);
    if (name == "")
        header.textContent = `Mozilla is Cool`;
    else
        header.textContent = `Mozilla is Cool, ${name}`;
}

if (!localStorage.getItem("username")){
    setUsername();
}
else{
    const name = localStorage.getItem("username");
    header.textContent = `Mozilla is cool, ${name}`;
}

button.onclick = () => {
    setUsername();
}