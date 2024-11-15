
import axios from "axios";

export async function redirectToAuthCodeFlow(clientId: string, client_secret: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", client_secret);
    params.append("response_type", "code");
    params.append("redirect_uri", "https://munashe-spotify.onrender.com");
    params.append("scope", "user-read-private user-read-email user-top-read");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    
}

export function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export async function getAccessToken(clientId: string, code: string) {

    const verifier = localStorage.getItem("verifier");

    const res = await axios.post(`https://accounts.spotify.com/api/token`, new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://localhost:5173',
      code_verifier: verifier!,
    }),{
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    

    const result = await res.data;
    localStorage.setItem('access_token', result.access_token);
    return result.access_token;
    
}

export async function fetchProfile(token: string) : Promise<any> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    if(result.status === 401){
        console.log("Token expired")
        const clientId = "4ff51706617149c6afd724bac106e9ce";
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const newToken = await getAccessToken(clientId, code!)
        fetchProfile(newToken)
    }

    return await result.json();
    
}