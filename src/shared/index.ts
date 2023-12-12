export const config = {
    logoCount: 5,
    firebaseConfig: {
       apiKey: "AIzaSyD3fkMDjR-NGpTwy0nxvyOcNbrcUL5EFZw",
        authDomain: "lets-meet-up-98e67.firebaseapp.com",
        projectId: "lets-meet-up-98e67",
        storageBucket: "lets-meet-up-98e67.appspot.com",
        messagingSenderId: "504378733822",
        appId: "1:504378733822:web:c600b27e0c3bd86e8021af",
        measurementId: "G-CMLFRG02HP"
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

