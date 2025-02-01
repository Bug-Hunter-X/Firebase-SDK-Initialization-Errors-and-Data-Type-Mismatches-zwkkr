// Correct Firebase initialization (assuming necessary setup is done)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

// ... (Your Firebase configuration)
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Correct data types
const data = {
  name: "John Doe",
  age: 30,
  isRegistered: true,
  scores: [85, 92, 78] // Array of numbers
};

const newPostRef = push(ref(db, 'users'));
set(newPostRef, data).then(() => {
  console.log('Data added successfully!');
}).catch((error) => {
  console.error('Error adding data:', error);
});

// Read data with error handling
onValue(ref(db, 'users'), (snapshot) => {
  if(snapshot.exists()) {
    console.log(snapshot.val())
  } else {
    console.log('No data found')
  }
});