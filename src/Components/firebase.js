import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCWPqVcNAkdE_iTut-RROFgipArHC6qz9Y",
  authDomain: "e-project-48ad6.firebaseapp.com",
  databaseURL: "https://e-project-48ad6.firebaseio.com",
  projectId: "e-project-48ad6",
  storageBucket: "e-project-48ad6.appspot.com",
  messagingSenderId: "765574534599",
  appId: "1:765574534599:web:6f9fe8fa355741032935e2",
  measurementId: "G-1GC3RPQPJB"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};