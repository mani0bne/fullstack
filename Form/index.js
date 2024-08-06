// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

 document.write(<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>)
 document.write(<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>)

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCMLLqCUQxxFuyV5VNQWDAo5N2l14tl9qE",
    authDomain: "form-a8dd4.firebaseapp.com",
    projectId: "form-a8dd4",
    storageBucket: "form-a8dd4.appspot.com",
    messagingSenderId: "1070654895948",
    appId: "1:1070654895948:web:c05c401c2cabba6826c1e9",
    measurementId: "G-B26S12ZDM4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the default form submission

    // Get the data from the form
    var inputData = document.getElementById('dataField').value;

    // Get a reference to the database
    var database = firebase.database();

    // Push the data to the database
    database.ref('form-a8dd4.appspot.com').push({
      data: inputData
    });

    // Clear the form after submission
    document.getElementById('form').reset();
  });

  <script>
  // Get a reference to the database
  var database = firebase.database();

  // Read data from the database
  database.ref('form-a8dd4.appspot.com').on('value', function(snapshot) {
    // Handle the data retrieved
    var data = snapshot.val();
    console.log(data);
  });
</script>


