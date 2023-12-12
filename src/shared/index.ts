export const config = {
    logoCount: 5,
    firebaseConfig: {
        apiKey: "AIzaSyBDv12yuO9mC1gAaoC2-4hVc-6HpOdjtNo",
          authDomain: "https://lets-meet-up.vercel.app/",
          projectId: "longmeet-d8fb9",
          storageBucket: "longmeet-d8fb9.appspot.com",
          messagingSenderId: "712828169711",
          appId: "1:712828169711:web:8a317461412d786dfa9a1a",
          measurementId: "G-6NSLCV7J3R"
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

