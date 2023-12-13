export const config = {
    logoCount: 5,
    firebaseConfig: {
         apiKey: "AIzaSyAMAjXiSWZkcW_6qPayHphe-C_MJY4uO-Q",
         authDomain: "lets-meet-up-2d2da.firebaseapp.com",
         projectId: "lets-meet-up-2d2da",
         storageBucket: "lets-meet-up-2d2da.appspot.com",
         messagingSenderId: "324602857399",
         appId: "1:324602857399:web:891da3a3688b0e3f100a32",
         measurementId: "G-TEYC9H1XB8"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

export const firebase = firebase.initializeApp(config.firebaseConfig);
export const db = firebase.firestore();
