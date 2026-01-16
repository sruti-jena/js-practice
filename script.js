function func1() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            reject('404');
        }, 1000)
    })
}
function func2() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve('200');
        }, 1000)
    })
}

function onsuccess(data) {
    console.log(data)
}
function onfailure(data) {
    console.log(data)
}
