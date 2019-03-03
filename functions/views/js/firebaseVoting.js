function addResturant(){
    var database = firebase.database();
    var resturantRef = database.ref('/Resturants');

    var resturantInput = document.getElementById('addResturant');

    var resturantName = resturantInput.value;
    resturantInput.value = '';

    return resturantRef.push({
        name: resturantName,
        votes:0
    })
        .then(() => {
             window.location.reload();
             return '';
        })
        .catch((error) => {
            console.log(error);
        });
}

function upvote(key){
    console.log(key);
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    var displayName = user.displayName

    var resturantRef = database.ref('/Resturants/'+ key + '/votes/' + userId);


    resturantRef.set(displayName)
                .then(() =>{
                    window.location.reload();
                    return '';
                })
                .catch((err) => {
                    console.log(err);
                });

}

function downvote(key){
    console.log(key);
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    var displayName = user.displayName

    var resturantRef = database.ref('/Resturants/'+ key + '/votes').remove()
                                                                   .then(() =>{
                                                                       window.location.reload();
                                                                       return '';
                                                                   })
                                                                   .catch((err)=>{
                                                                       console.log(err);
                                                                   });

}