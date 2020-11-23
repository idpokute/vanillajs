var user = {
    name: 'mike',
    gender: 'male'
};

var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
}

var user2 = changeName(user, 'kute');

if (user !== user2) {
    console.log('user and user2 are not the same.');
}

console.log(user)
console.log('hi')
console.log(user2, 'adsf')

var a = 'asdf';
console.log(a);