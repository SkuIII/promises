const myFetch = async() => {
    const response = await fetch('/data');
    const data = await response.json();
    return data;
}
  
myFetch().then(data => {
    Load(data);

    data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;

        document.getElementById('list').appendChild(li);
    });
});

const Load = (data) => {
    console.log(data);
}