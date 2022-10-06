function makeAPICall(flag) {
    var p1 = new Promise((resolve, reject) => {
        if (flag) {
            setTimeout(() => {
                resolve({'message':'delayed success!'})
            }, 500)
        } else {
            setTimeout(() => {
                reject({'error':'delayed exception!!'})
            }, 500)
        }
    })
    return p1
}


makeAPICall(true).then(succes => console.log(succes))
    .catch(err => console.log(err));

makeAPICall(false).then(succes => console.log(succes))
    .catch(err => console.log(err))
