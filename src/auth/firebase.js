// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDMF-tMrsCmcw00FQLYBLTBjzYb5EptAL8",
authDomain: "auth2-c123e.firebaseapp.com",
projectId: "auth2-c123e",
storageBucket: "auth2-c123e.firebasestorage.app",
messagingSenderId: "35651025924",
appId: "1:35651025924:web:b339316ca7561ac6940951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function crearUsuario(email, password){
    return(
        new Promise((res, rej) =>{
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed up 
    console.log("credenciales" , userCredential)
    const user = userCredential.user;
    console.log(user)
    res(user)
    // ...
})
.catch((error) => {
    console.log(error.code, error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
    rej(error)
    // ..
});
        })
    )
    

}

export function loginEmailPass(email, password){
    return(
        new Promise((res, rej) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        console.log("credenciales" , userCredential)
        const user = userCredential.user;
        console.log(user)
        res(user)


    })
    .catch((error) => {
        console.log(error.code, error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
        rej(error)
    });
        } 
    ))

}
