const sendMessage = (msg) => {
    return fetch('http://192.168.1.57:8080/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messageId: "1234",
            content: msg
        })
    });
}