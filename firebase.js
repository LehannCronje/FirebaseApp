 // Initialize Firebase
 alert('hello');
 var config = {
    apiKey: 'AIzaSyD8EICZkIJyELL5goHj7kHPVg6QV-ItPmQ',
    authDomain: 'node-firebase-bb80a.firebaseapp.com',
    databaseURL: 'https://node-firebase-bb80a.firebaseio.com',
    projectId: 'node-firebase-bb80a',
    storageBucket: 'node-firebase-bb80a.appspot.com',
    messagingSenderId: '510772729285'
};
firebase.initializeApp(config);

function signInWIthGoogle(){
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInwithPopup(googleAuthProvider)
            .then((data) => {
                console.log(data);
            })
            .catch((error)=>{
                console.log(error);
            });
};