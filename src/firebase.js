export function initFirebase() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCtSCRnzTPWoAH9PEPN8OeRjvvS2gNS19Q',
    authDomain: 'my-project-1501757537357.firebaseapp.com',
    databaseURL: 'https://my-project-1501757537357.firebaseio.com',
    projectId: 'my-project-1501757537357',
    storageBucket: 'my-project-1501757537357.appspot.com',
    messagingSenderId: '966018306178',
  };

  firebase.initializeApp(config); // eslint-disable-line no-undef
}

export default firebase; // eslint-disable-line no-undef
