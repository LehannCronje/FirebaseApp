function checkIfLoggedIn(){
    if(localStorage.getItem('firebase_idToken')){
        document.getElementById('gone').setAttribute('style','display: none; visibility:hidden');

        document.getElementById('google-pic').setAttribute('src', localStorage.getItem('google_photo'))
    }else{
        document.getElementById('gone').setAttribute('style','display: inline-block; visibility:visible');
    }
}
checkIfLoggedIn();
function signInWIthGoogle(){
var googleAuthProvider = new firebase.auth.GoogleAuthProvider;
firebase.auth().signInWithPopup(googleAuthProvider)
        .then((data) => {

            var idToken = data.credential.idToken;
            localStorage.setItem('firebase_idToken',idToken);
            localStorage.setItem('google_photo',data.user.photoURL);

            console.log(data);
            document.getElementById("google-email").innerHTML = data.user.email;
            document.getElementById("google-displayName").innerHTML = data.user.displayName;
            document.getElementById("google-pic").src = data.user.photoURL;
        })
        .catch((error)=>{
            console.log(error);
        });
};