// login.js

function generateJWT(username) {
    const header = {
        alg: "HS256",
        typ: "JWT"
    };

    const payload = {
        sub: username,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) 
    };

    const secret = 'your-secret-key'; 

    const encodeBase64 = (data) => {
        return btoa(JSON.stringify(data)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    };

    const headerEncoded = encodeBase64(header);
    const payloadEncoded = encodeBase64(payload);
    const signature = encodeBase64(hmacSHA256(`${headerEncoded}.${payloadEncoded}`, secret));

    return `${headerEncoded}.${payloadEncoded}.${signature}`;
}

function hmacSHA256(message, key) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(key);
    const messageData = encoder.encode(message);

    return crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
        .then(cryptoKey => crypto.subtle.sign('HMAC', cryptoKey, messageData))
        .then(signature => {
            const array = Array.from(new Uint8Array(signature));
            return btoa(String.fromCharCode(...array)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        });
}

function authenticateUser(username, password) {
    const storedUser = {
        username: 'usuario',
        password: 'login@2024'
    };

    if (username === storedUser.username && password === storedUser.password) {
        const token = generateJWT(username);
        localStorage.setItem('token', token);
        return { success: true, token };
    } else {
        return { success: false, message: 'Login ou senha invalido' };
    }
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
    const result = authenticateUser(username, password);
    
    if (result.success) {
        document.getElementById('message').textContent = 'Login bem sucedido!';
        window.location.href = 'index.html';
    } else {
        document.getElementById('message').textContent = result.message;
    }
});
