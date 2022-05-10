function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value == 'Admin') {
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map

usuarios.set('Catarina', 'Admin');
usuarios.set('Érica', 'User');
usuarios.set('Isabela', 'Admin');
usuarios.set('Lucas', 'Admin');

console.log(getAdmins(usuarios));