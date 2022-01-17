console.log('im alive');

let dataURL = '../data.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL); 
req.responseType='json'; 
req.send(); 

req.onload = () => {
    const data = req.response;
    console.log(data);

    

    data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        
        document.getElementById('list').appendChild(li);
    });
    
}