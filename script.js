let a = 1
setTimeout(function () {
    console.log('Привет мир!');
}, 3000)
console.log(a);

const data = new Promise(function(resolve, reject) {
    let a = 1
    setTimeout(function() {
        console.log('Привет мир!');
        resolve(a)
    }, 3000)
}).then(function(data) {
    console.log(data);
})
console.log(data);

 
new Promise(function(resolve, reject) {
    const random = Math.floor(Math.random() * 20 + 1)
    if(random >= 10) {
        setTimeout(function() {
            resolve(random)
        }, 2000)
    } else {
        setTimeout(function() {
            reject(random)
        }, 2000)
    }
})
.then(function(number) {
    console.log(number);
}).catch(function(number) {
    console.log(number + ' Меньше 10');
}).finally(function() {
    console.log('Обещание выполнено');
})

const input = document.querySelector('input'),
    btn = document.querySelector('button'),
    span = document.querySelector('span')
    
btn.addEventListener('click', async function() {
    const value = input.value
    
    navigator.clipboard.writeText(value)
    .then(function() {
        span.innerHTML = 'Скопировано'
    }).catch(function() {
        span.innerHTML = 'Ошибка копирования'
    }).finally(function() {
        setTimeout(function() {
            span.innerHTML = ''
        }, 3000)
    })
    try {
        await navigator.clipboard.writeText(value)
        span.innerHTML = 'Скопировано'
    } catch {
        span.innerHTML = 'Ошибка копирования'
    } finally {
        setTimeout(function() {
            span.innerHTML = ''
        }, 3000)
    }
})


const video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({
    video: true,
}).then(function(stream) {
    video.srcObject = stream
    video.play()
}).catch(function() {
    console.log('Ошибка подключения');
})

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(data) {return data.json()})
.then(function(data) {
    console.log(data);
})

async function getData() {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonData = await fetchData.json()
    console.log(jsonData);
}

getData()