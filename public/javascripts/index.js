console.log('im alive');

const fetchJson = fetch('/data')
    .then((response) => response.json()
    .then(res => Load(res)));

const Load = (res) => {

    res.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;

        document.getElementById('list').appendChild(li);
    });
}