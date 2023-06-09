import './style.css'
import './firebase.ts'

const servers = {
    iceServers: [
        {
            urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
        }
    ],
    iceCandidatePoolSize: 10,
}

let pc = new RTCPeerConnection(servers)
let localstream = null
let remoteStream = null

const webcamButton = document.getElementById("webcamButton")
const webcamVideo = document.getElementById("webcamVideo")
const callButton = document.getElementById("callButton")
const callInput = document.getElementById("callInput")
const answerButton = document.getElementById("answerButton")
const remoteVideo = document.getElementById("remoteVideo")
const hangupButton = document.getElementById("hangupButton")
