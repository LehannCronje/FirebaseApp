function checkIfLoggedIn(){

    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //do logged in stuff
            console.log('user signed in');
            console.log(user);
            var photoURL = user.photoURL;
            document.getElementById("google-pic").src = photoURL;
            document.getElementById('google-signin').setAttribute('style', 'display:none; visibility:hidden');
            document.getElementById('signout').setAttribute('style', 'display: inline-block; visibilty:visible');
        }else{
            //do not logged in stuff
            console.log('user not signed in');
            document.getElementById('google-signin').setAttribute('style', 'display: inline-block; visibility:visible');
            document.getElementById('signout').setAttribute('style', 'display:none; visibilty:hidden');
        }
    }); 
}

window.onload = () => {
    checkIfLoggedIn();
};

function signOut(){
    firebase.auth().signOut();

    document.getElementById('google-pic').setAttribute('src','');

    checkIfLoggedIn();
}

function signInWIthGoogle(){
var googleAuthProvider = new firebase.auth.GoogleAuthProvider;
firebase.auth().signInWithPopup(googleAuthProvider)
        .then((data) => {
            var idToken = data.credential.idToken;

           
            checkIfLoggedIn();
            return '';
        })
        .catch((error)=>{
            console.log(error);
        });
}